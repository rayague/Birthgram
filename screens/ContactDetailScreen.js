import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";

// Function to open the database
const openDatabaseAsync = () => {
  return SQLite.openDatabaseSync("contacts.db");
};

const ContactDetailScreen = ({ contactId }) => {
  const [contact, setContact] = useState(null);

  // Load contact details from the database
  const loadContact = async () => {
    const db = openDatabaseAsync();
    console.log("Database instance:", db);

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM contact WHERE id = ?;",
        [contactId],
        (_, { rows }) => {
          console.log("Query successful, rows:", rows); // Check the rows returned
          if (rows.length > 0) {
            setContact(rows._array[0]);
          } else {
            console.error(
              "No contact found for the given contactId:",
              contactId
            );
          }
        },
        (tx, error) => {
          console.error("Error loading contact: ", error);
        }
      );
    });
  };

  useEffect(() => {
    loadContact();
  }, [contactId]);

  return (
    <View>
      {contact ? <Text>{contact.name}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default ContactDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    fontSize: 16
  },
  contactImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
    borderColor: "#ddd",
    borderWidth: 2,
    backgroundColor: "#e0e0e0"
  },
  saveButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center"
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
