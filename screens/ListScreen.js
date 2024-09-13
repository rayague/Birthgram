import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
  RefreshControl,
  Image
} from "react-native";
import * as SQLite from "expo-sqlite";

const openDatabaseAsync = async () => {
  return await SQLite.openDatabaseAsync("contacts.db");
};

export default function ListScreen() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchContacts = useCallback(async () => {
    try {
      const db = await openDatabaseAsync();
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS contact (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          date TEXT,
          option TEXT,
          imageUri TEXT
        );
      `);
      const result = await db.getAllAsync("SELECT * FROM contact");
      setContacts(result);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching contacts: ", error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContacts(); // Appeler la fonction pour charger les contacts au démarrage
  }, [fetchContacts]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchContacts().then(() => setRefreshing(false));
  }, [fetchContacts]);

  const handleDelete = async (id) => {
    Alert.alert(
      "Confirmation",
      "Voulez-vous vraiment supprimer ce contact ?",
      [
        { text: "Annuler", style: "cancel" },
        {
          text: "OK",
          onPress: async () => {
            try {
              const db = await openDatabaseAsync();
              await db.execAsync(`DELETE FROM contact WHERE id = ?`, [id]);
              fetchContacts();
            } catch (error) {
              console.error("Error deleting contact: ", error);
            }
          }
        }
      ],
      { cancelable: true }
    );
  };

  const renderContactItem = ({ item }) => (
    <View style={styles.card}>
      {item.imageUri ? (
        <Image source={{ uri: item.imageUri }} style={styles.contactImage} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <View style={styles.cardContent}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactDate}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
        <Text style={styles.contactOption}>{item.option}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.buttonText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loadingText}>Chargement des contacts...</Text>
      ) : contacts.length > 0 ? (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderContactItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <Text style={styles.emptyText}>Aucun contact trouvé.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#f9f9f9",
    padding: 20
  },
  flatListContent: {
    paddingBottom: 20
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 3,
    marginVertical: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3
  },
  cardContent: {
    flex: 1,
    marginLeft: 10
  },
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center"
  },
  placeholderText: {
    color: "#fff",
    fontWeight: "bold"
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  contactDate: {
    fontSize: 14,
    color: "#666"
  },
  contactOption: {
    fontSize: 14,
    color: "#666"
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888"
  }
});
