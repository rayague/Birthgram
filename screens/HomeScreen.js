import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
  Pressable
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker"; // Pour sélectionner une image
import DateTimePicker from "@react-native-community/datetimepicker"; // Pour le sélecteur de date
import { Picker } from "@react-native-picker/picker";
import * as SQLite from "expo-sqlite";
import { useNavigation } from "@react-navigation/native";

const openDatabaseAsync = async () => {
  return await SQLite.openDatabaseAsync("contacts.db");
};

export default function HomeScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const db = openDatabaseAsync(); // Appel de la fonction pour ouvrir la base de données

  useEffect(() => {
    const initializeDatabase = async () => {
      const database = await db;
      // Créer la table contact si elle n'existe pas déjà
      await database.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS contact (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          date TEXT,
          option TEXT,
          imageUri TEXT
        );
      `);
      console.log("Table 'contact' created or already exists.");
    };
    initializeDatabase();
  }, []);

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    // Vérification des champs
    if (!name || !selectedOption || !imageUri) {
      Alert.alert("Error", "All fields must be filled.");
      console.log(
        "Tentative de soumission échouée : un ou plusieurs champs sont vides."
      );
      return;
    }

    // Début du chargement
    setIsLoading(true);
    console.log("Submitting...");

    // Insérer les données dans la table contact
    try {
      const database = await db;
      const result = await database.runAsync(
        "INSERT INTO contact (name, date, option, imageUri) VALUES (?, ?, ?, ?);",
        [name, date.toISOString(), selectedOption, imageUri]
      );
      console.log("Soumission réussie, ID:", result.lastInsertRowId);
      Alert.alert(
        "Data Submitted",
        `Name: ${name}, Date: ${date.toLocaleDateString()}, Option: ${selectedOption}, Image: ${
          imageUri ? "Selected" : "None"
        }`
      );
      navigation.navigate("LIST");

      // Réinitialiser les champs après soumission
      setName("");
      setDate(new Date());
      setSelectedOption("");
      setImageUri(null);
    } catch (error) {
      console.error("Error inserting data: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar backgroundColor="dodgerblue" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            source={require("../assets/images/picture1.png")}
            style={styles.formImage}
          />

          {/* Input for Name */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Name" // Texte visible en anglais
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* Input for Date */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="calendar-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.input}
            >
              <Text>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    setDate(selectedDate);
                  }
                }}
              />
            )}
          </View>

          {/* Input for Selection */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="list-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <Pressable style={styles.inputStatusPicker}>
              <Picker
                style={styles.statusColor}
                placeholderTextColor="#fff"
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
              >
                <Picker.Item label="SON" value="SON" />
                <Picker.Item label="DAUGHTER" value="DAUGHTER" />
                <Picker.Item label="SISTER" value="SISTER" />
                <Picker.Item label="BROTHER" value="BROTHER" />
                <Picker.Item label="FRIEND" value="FRIEND" />
                <Picker.Item label="NEIGHBOR" value="NEIGHBOR" />
                <Picker.Item label="BESTFRIEND" value="BESTFRIEND" />
                <Picker.Item label="BOYFRIEND" value="BOYFRIEND" />
                <Picker.Item label="GIRLFRIEND" value="GIRLFRIEND" />
                <Picker.Item label="HUSBAND" value="HUSBAND" />
                <Picker.Item label="FATHER" value="FATHER" />
                <Picker.Item label="MOTHER" value="MOTHER" />
                <Picker.Item label="AUNTIE" value="AUNTIE" />
                <Picker.Item label="UNCLE" value="UNCLE" />
                <Picker.Item label="COUSIN" value="COUSIN" />
                <Picker.Item label="NIECE" value="NIECE" />
                <Picker.Item label="NEPHEW" value="NEPHEW" />
                <Picker.Item label="GRAND-SON" value="GRAND-SON" />
                <Picker.Item label="GRAND-DAUGHTER" value="GRAND-DAUGHTER" />
                <Picker.Item label="GRAND-FATHER" value="GRAND-FATHER" />
                <Picker.Item label="GRAND-MOTHER" value="GRAND-MOTHER" />
                <Picker.Item label="GOD-FATHER" value="GOD-FATHER" />
                <Picker.Item label="GOD-MOTHER" value="GOD-MOTHER" />
              </Picker>
            </Pressable>
          </View>

          {/* Input for Image Selection */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="image-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TouchableOpacity
              style={styles.imagePicker}
              onPress={handleImagePick}
            >
              <Text style={styles.imagePickerText}>
                {imageUri ? "Image selected" : "Select an image"}
              </Text>
            </TouchableOpacity>
          </View>

          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.selectedImage} />
          )}

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <Text style={styles.submitButtonText}>Loading...</Text> // Texte visible en anglais
            ) : (
              <Text style={styles.submitButtonText}>Submit</Text> // Texte visible en anglais
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1
  },
  scrollViewContent: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: "95%",
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: "white",
    marginVertical: 30
  },
  formImage: {
    height: 230,
    width: "100%",
    marginBottom: 15
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    alignContent: "center",
    justifyContent: "center"
  },
  imagePicker: {
    flex: 1,
    justifyContent: "center",
    height: 40
  },
  imagePickerText: {
    fontSize: 16,
    color: "dodgerblue"
  },
  submitButton: {
    backgroundColor: "dodgerblue",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  inputStatusPicker: {
    alignContent: "center",
    justifyContent: "center",
    // height: 55,
    width: "90%",
    // marginVertical: 5,
    paddingHorizontal: 10,
    fontFamily: "sans-serif",
    fontSize: 17,
    color: "white",
    fontWeight: "bold"
  },
  statusColor: {
    // fontWeight: "bold",
    // padding: 10
  },
  selectedImage: {
    width: 300, // Largeur de l'image
    height: 200, // Hauteur de l'image
    resizeMode: "cover", // Mode de redimensionnement
    alignSelf: "center", // Centre l'image
    marginTop: 10 // Espace au-dessus de l'image
  }
});
