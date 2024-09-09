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
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import * as Clipboard from "expo-clipboard";

const openDatabaseAsync = async () => {
  return await SQLite.openDatabaseAsync("contacts.db");
};

export default function CelebrationScreen() {
  const [celebrations, setCelebrations] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");

  // Ouvrir la base de données
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initDatabase = async () => {
      const database = await openDatabaseAsync();
      setDb(database);
      loadCelebrations(database);
    };
    initDatabase();
  }, []);

  const loadCelebrations = async (database) => {
    if (!database) return;

    try {
      // Récupérer tous les contacts
      database.transaction((tx) => {
        tx.executeSql("SELECT * FROM contact;", [], (txObj, resultSet) => {
          const contacts = resultSet.rows._array;

          // Obtenir la date actuelle
          const today = new Date();
          const fiveDaysLater = new Date();
          fiveDaysLater.setDate(today.getDate() + 5);

          // Filtrer les contacts dont la date est entre aujourd'hui et dans 5 jours
          const filteredCelebrations = contacts.filter((contact) => {
            const contactDate = new Date(contact.date);
            return contactDate >= today && contactDate <= fiveDaysLater;
          });

          // Mettre à jour l'état avec les contacts filtrés
          setCelebrations(filteredCelebrations);
        });
      });
    } catch (error) {
      console.error("Error loading celebrations: ", error);
    }
  };

  const onRefresh = async () => {
    setIsRefreshing(true);
    await loadCelebrations(db);
    setIsRefreshing(false);
  };

  const openContacts = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch((err) =>
      console.error("Error opening dialer:", err)
    );
  };

  const handleGenerate = async (contactId) => {
    try {
      const message = await getMessageByContactId(contactId); // Récupérer le message depuis la base
      setGeneratedMessage(message); // Mettre à jour l'état avec le message récupéré
      setModalVisible(true); // Ouvrir le modal
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const getMessageByContactId = (contactId) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT message FROM text WHERE contact_id = ?",
          [contactId],
          (txObj, resultSet) => {
            if (resultSet.rows.length > 0) {
              resolve(resultSet.rows._array[0].message); // Récupérer le message
            } else {
              resolve("Aucun message trouvé pour ce contact."); // Si aucun message trouvé
            }
          },
          (txObj, error) => {
            console.error("Error retrieving message: ", error);
            reject("Erreur lors de la récupération du message.");
          }
        );
      });
    });
  };

  const copyToClipboard = () => {
    if (generatedMessage) {
      Clipboard.setString(generatedMessage);
      console.log("Copied to clipboard!", generatedMessage);
    }
  };

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
            onPress={() => handleGenerate(item.id)} // Passer l'ID du contact ici
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
        keyExtractor={(item) => item.id.toString()} // Assurez-vous que l'ID est une chaîne
        contentContainerStyle={styles.celebrationList}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      />
      <View style={modalVisible ? styles.centeredView : null}>
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
              <Text style={styles.modalText}>
                {generatedMessage} {/* Affiche le message récupéré */}
              </Text>
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
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: "100%"
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
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  }
});
