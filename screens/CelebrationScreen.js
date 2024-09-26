import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Pressable,
  Alert,
  RefreshControl,
  Modal,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import * as SQLite from "expo-sqlite";
import { Ionicons } from "@expo/vector-icons";
import * as Contacts from "expo-contacts";
import * as Linking from "expo-linking";
import * as Clipboard from "expo-clipboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import seedData from "./TextGenerator"; // Assurez-vous de la bonne importation

const openDatabaseAsync = async () => {
  return await SQLite.openDatabaseAsync("contacts.db");
};

export default function CelebrationScreen() {
  const [celebrations, setCelebrations] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");

  const db = openDatabaseAsync();

  const loadCelebrations = async () => {
    const database = await db;
    try {
      // Récupérer tous les contacts
      const result = await database.getAllAsync("SELECT * FROM contact;");

      // Obtenir la date actuelle
      const today = new Date();

      // Définir la date limite de 5 jours dans le futur
      const fiveDaysLater = new Date();
      fiveDaysLater.setDate(today.getDate() + 5);

      // Filtrer les contacts dont la date est entre aujourd'hui et dans 5 jours
      const filteredCelebrations = result.filter((contact) => {
        const contactDate = new Date(contact.date); // Convertir la date du contact en objet Date
        return contactDate >= today && contactDate <= fiveDaysLater;
      });

      // Mettre à jour l'état avec les contacts filtrés
      setCelebrations(filteredCelebrations);
    } catch (error) {
      console.error("Error loading celebrations: ", error);
    }
  };

  useEffect(() => {
    const requestNotificationPermission = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Notification permissions are required!");
      }
    };

    requestNotificationPermission();
  }, []);

  useEffect(() => {
    const initializeDatabase = async () => {
      const database = await openDatabaseAsync();
      await loadCelebrations(); // Charge les célébrations après que la DB soit prête

      // S'assurer que seedData est correctement implémenté et seed les données
      seedData();

      // Vérifier les données de la table 'texts'
      database.transaction((tx) => {
        tx.executeSql(
          `SELECT * FROM texts`, // Sélectionner toutes les entrées de la table texts
          [],
          (_, result) => {
            const texts = [];
            for (let i = 0; i < result.rows.length; i++) {
              texts.push(result.rows.item(i));
            }
            console.log("Données dans 'texts':", texts); // Affiche les données dans la console

            // Alerte pour vérifier si les données existent
            if (texts.length > 0) {
              Alert.alert(
                "Données existantes",
                "Les données de seedData ont été ajoutées à la base de données !"
              );
            } else {
              Alert.alert(
                "Erreur",
                "Aucune donnée trouvée dans la table 'texts'."
              );
            }
          },
          (error) => {
            console.error("Error fetching data from texts: ", error);
          }
        );
      });
    };

    initializeDatabase();
  }, []);

  const handleCall = (name) => {
    Alert.alert(`Calling ${name}...`);
  };
  const scheduleNotificationsForContacts = async () => {
    for (const contact of celebrations) {
      const contactDate = new Date(contact.date);
      const today = new Date();
      const daysRemaining = Math.ceil(
        (contactDate - today) / (1000 * 60 * 60 * 24)
      );

      if (daysRemaining >= 0 && daysRemaining <= 5) {
        // Planifier les notifications
        for (let i = 0; i < 3; i++) {
          // Trois notifications par jour
          const hour = i === 0 ? 9 : i === 1 ? 13 : 18; // Notifications à 9h, 13h, 18h

          await Notifications.scheduleNotificationAsync({
            content: {
              title: "Upcoming Birthday Reminder 🎉",
              body: `${contact.name}'s birthday is in ${daysRemaining} days!`
            },
            trigger: {
              hour: hour,
              minute: 0,
              repeats: true
            }
          });

          // Afficher le ToastAndroid
          showToast(contact.name, daysRemaining);
        }
      }
    }
  };

  useEffect(() => {
    if (celebrations.length > 0) {
      scheduleNotificationsForContacts();
    }
  }, [celebrations]);

  const showToast = (contactName, daysRemaining) => {
    const message = `${contactName}'s birthday is in ${daysRemaining} days!`;
    ToastAndroid.show(message, ToastAndroid.LONG);
    console.log(`Toast shown: ${message}`);
  };

  const onRefresh = async () => {
    setIsRefreshing(true);
    await loadCelebrations();
    setIsRefreshing(false);
  };

  const openContacts = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch((err) =>
      console.error("Error opening dialer:", err)
    );
  };

  // const handleGenerate = async (contactId) => {
  //   // Récupérer le message basé sur l'ID du contact
  //   const message = await getMessageByContactId(contactId);
  //   setGeneratedMessage(message); // Met à jour l'état avec le message
  //   setModalVisible(true); // Affiche le modal
  // };

  const handleGenerate = () => {
    db.transaction((tx) => {
      // Exécuter une requête pour compter le nombre d'entrées dans la table "texts"
      tx.executeSql(
        `SELECT COUNT(*) as count FROM texts`,
        [],
        (_, result) => {
          const count = result.rows.item(0).count;
          if (count > 0) {
            Alert.alert(
              "Success",
              "Les données existent dans la base de données !"
            );
          } else {
            Alert.alert(
              "Error",
              "Aucune donnée trouvée dans la base de données."
            );
          }
        },
        (error) => {
          console.error("Error fetching data: ", error);
          Alert.alert(
            "Error",
            "Une erreur est survenue lors de la vérification."
          );
        }
      );
    });
  };

  const scheduleNotification = async (contactName, daysRemaining) => {
    const message = `${contactName}'s birthday is in ${daysRemaining} days!`;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Upcoming Birthday Reminder 🎉",
        body: message
      },
      trigger: {
        hour: 9, // Notification à 9h
        minute: 0,
        repeats: true
      }
    });

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Upcoming Birthday Reminder 🎉",
        body: message
      },
      trigger: {
        hour: 18, // Notification à 18h
        minute: 0,
        repeats: true
      }
    });

    console.log(`Notification scheduled for ${contactName}: ${message}`);
  };

  const generateMessage = async (relationship) => {
    console.log(`Generating message for relationship: ${relationship}`);
    try {
      const storedMessages = await AsyncStorage.getItem(relationship);
      const messages = storedMessages ? JSON.parse(storedMessages) : [];
      console.log(`Messages retrieved for ${relationship}:`, messages);

      if (messages.length > 0) {
        const randomMessage =
          messages[Math.floor(Math.random() * messages.length)];
        console.log(`Random message selected: ${randomMessage.content}`);
        setGeneratedMessage(randomMessage.content);
        setModalVisible(true); // Ouvre le modal
      } else {
        console.log(`No messages found for ${relationship}.`);
        Alert.alert(
          "No messages found",
          "No messages available for this relationship."
        );
      }
    } catch (error) {
      console.error("Error retrieving messages: ", error);
    }
  };

  const copyToClipboard = () => {
    if (generatedMessage) {
      Clipboard.setString(generatedMessage);
      console.log("Copied to clipboard!", generatedMessage);
    }
  };

  // const renderCelebrationItem = ({ item }) => (
  //   <View>
  //     <View style={styles.celebrationItem}>
  //       <Text style={styles.celebrationName}>{item.name}</Text>
  //       <Text style={styles.celebrationDate}>
  //         {new Date(item.date).toLocaleDateString()}
  //       </Text>
  //       <View style={styles.buttonContainer}>
  //         <Pressable
  //           style={styles.callButton}
  //           onPress={() => openContacts(item.phoneNumber)}
  //         >
  //           <Ionicons name="call" size={24} color="white" />
  //           <Text style={styles.buttonText}>CALL</Text>
  //         </Pressable>
  //         <Pressable
  //           style={styles.generateButton}
  //           // onPress={() => handleGenerate(item.id)} // Passer l'ID du contact
  //           onPress={() => {
  //             const relationship = item.relationship?.toUpperCase();
  //             if (relationship) {
  //               console.log(`Generate button pressed for ${item.username}`);
  //               generateMessage(relationship);
  //             } else {
  //               console.error("Relationship is undefined for the item:", item);
  //             }
  //           }}
  //         >
  //           <Ionicons name="document-text" size={24} color="white" />
  //           <Text style={styles.buttonText}>GENERATE</Text>
  //         </Pressable>
  //       </View>
  //     </View>
  //   </View>
  // );
  // In renderCelebrationItem
  const renderCelebrationItem = ({ item }) => (
    <View>
      <View style={styles.celebrationItem}>
        <Text style={styles.celebrationName}>{item.name}</Text>
        <Text style={styles.celebrationDate}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.callButton}
            onPress={() => openContacts(item.phoneNumber)}
          >
            <Ionicons name="call" size={24} color="white" />
            <Text style={styles.buttonText}>CALL</Text>
          </Pressable>
          <Pressable
            style={styles.generateButton}
            onPress={() => {
              const relationship = item.relationship || item.option; // Fallback to option if relationship is undefined
              console.log(`Generate button pressed for ${item.name}`);
              generateMessage(relationship.toUpperCase());
            }}
          >
            <Ionicons name="document-text" size={24} color="white" />
            <Text style={styles.buttonText}>GENERATE</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="dodgerblue" />
      <FlatList
        data={celebrations}
        renderItem={renderCelebrationItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.celebrationList}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      />
      {modalVisible && ( // Utilise cette condition pour afficher la vue centrée
        <View style={styles.centeredView}>
          <Modal
            transparent={true}
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{generatedMessage}</Text>
                <TouchableOpacity
                  onPress={copyToClipboard}
                  style={styles.copyButton}
                >
                  <Text style={styles.buttonText}>COPY TEXT</Text>
                </TouchableOpacity>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>CLOSE</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#f9f9f9"
  },
  celebrationItem: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 3
  },
  celebrationName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  celebrationDate: {
    fontSize: 14,
    color: "#666",
    marginVertical: 2
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginRight: 5
  },
  generateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginLeft: 5
  },
  buttonText: {
    color: "#fff",
    marginLeft: 5,
    fontWeight: "bold"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)" // Fond assombri
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4 // Augmenté pour plus d'ombre
    },
    shadowOpacity: 0.25,
    shadowRadius: 5, // Augmenté pour une ombre plus douce
    elevation: 8 // Augmenté pour plus de relief
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: "100%"
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "red"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  copyButton: {
    backgroundColor: "#2196F3",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 3
  }
});
