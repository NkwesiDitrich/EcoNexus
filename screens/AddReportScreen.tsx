import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useReportContext } from '../Context/ReportContext';

const AddReportScreen = () => {
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState('');
  const { addReport } = useReportContext();

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.form}>
          <Text style={styles.title}>Submit a Waste Report</Text>

          <TextInput
            style={styles.input}
            placeholder="Type of Waste"
            value={type}
            onChangeText={setType}
          />

          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Drop-off Location"
            value={location}
            onChangeText={setLocation}
          />

          <View style={styles.button}>
            <Button title="Submit Report" onPress={handleSubmit} color="#3662AA" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  form: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 15,
    backgroundColor: '#fafafa',
  },
  button: {
    marginTop: 10,
  },
});

export default AddReportScreen;
