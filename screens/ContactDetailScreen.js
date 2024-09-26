import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  Pressable
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import * as SQLite from "expo-sqlite";
import { useNavigation, useRoute } from "@react-navigation/native";

const openDatabaseAsync = async () => {
  return await SQLite.openDatabaseAsync("contacts.db");
};

export default function ContactDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { contact } = route.params; // Récupération des données du contact passé en paramètre

  const [name, setName] = useState(contact.name);
  const [date, setDate] = useState(new Date(contact.date));
  const [selectedOption, setSelectedOption] = useState(contact.option);
  const [imageUri, setImageUri] = useState(contact.imageUri);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const db = openDatabaseAsync(); // Ouvre la base de données SQLite

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

  const handleUpdate = async () => {
    // Vérification des champs
    if (!name || !selectedOption || !imageUri) {
      Alert.alert("Error", "All fields must be filled.");
      return;
    }

    setIsLoading(true);

    try {
      const database = await db;
      // Mise à jour du contact dans la base de données
      await database.runAsync(
        "UPDATE contact SET name = ?, date = ?, option = ?, imageUri = ? WHERE id = ?;",
        [name, date.toISOString(), selectedOption, imageUri, contact.id]
      );
      Alert.alert("Contact updated successfully!");
      navigation.navigate("LIST"); // Retour à la page précédente après la mise à jour
    } catch (error) {
      console.error("Error updating contact: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {/* Input for Name */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Name"
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

          {/* Input for Selection
          <View style={styles.inputContainer}>
            <Ionicons
              name="list-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <Picker
              style={styles.statusColor}
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
          </View> */}

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

          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.selectedImage} />
          )}

          {/* Update Button */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleUpdate}
            disabled={isLoading}
          >
            {isLoading ? (
              <Text style={styles.submitButtonText}>Updating...</Text>
            ) : (
              <Text style={styles.submitButtonText}>Update Contact</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  contactImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: "center"
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    alignSelf: "center"
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5
  },
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
