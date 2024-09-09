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
import * as Contacts from "expo-contacts";
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
    loadCelebrations();
  }, []);

  const handleCall = (name) => {
    Alert.alert(`Calling ${name}...`);
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

  const handleGenerate = async (contactId) => {
    // Récupérer le message basé sur l'ID du contact
    const message = await getMessageByContactId(contactId);
    setGeneratedMessage(message); // Met à jour l'état avec le message
    setModalVisible(true); // Affiche le modal
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
            onPress={() => handleGenerate(item.id)} // Passer l'ID du contact
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
    width: "100",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)" // Assombrit le fond uniquement quand modal est visible
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
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    // backgroundColor: "#2196F3"
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
    marginBottom: 10
  }
});
