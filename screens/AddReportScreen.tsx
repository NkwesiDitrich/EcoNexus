import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from 'react-native';
import { useReportContext } from '../Context/ReportContext';

const AddReportScreen = () => {
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState('');
  const { addReport } = useReportContext();  // access to the addReport function from the report context

  const handleSubmit = () => {
    if (!type || !weight || !location) {
      Alert.alert('Error', 'Please fill in all the fields.');
      return;
    }

    addReport({
      id: Date.now().toString(),
      type,
      weight,
      location,
      date: new Date().toLocaleDateString(),
    });

    Alert.alert('Success', 'Record submitted successfully.');
    setType('');
    setWeight('');
    setLocation('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled" // Ensures that taps on the input fields are handled correctly
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Report Waste</Text>

            <TextInput
              style={styles.input}
              placeholder="Type of Waste"
              value={type}
              onChangeText={setType}
              placeholderTextColor="#7C888D"
            />

            <TextInput
              style={styles.input}
              placeholder="Weight (kg)"
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
              placeholderTextColor="#7C888D"
            />

            <TextInput
              style={styles.input}
              placeholder="Drop-off Location"
              value={location}
              onChangeText={setLocation}
              placeholderTextColor="#7C888D"
            />

            <View style={styles.submitBtn}>
              <Button title="Submit Report" onPress={handleSubmit} color="#3662AA" />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#F9FAFB',
    borderRadius: 15,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#eee",
    fontSize: 16,
    paddingBottom: 10,
    marginBottom: 20,
    color: '#000',
  },
  submitBtn: {
    marginTop: 10,
  },
});

export default AddReportScreen;
