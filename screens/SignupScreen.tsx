import { StatusBar } from 'expo-status-bar';
import { Feather } from "@expo/vector-icons";

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationProp } from '@react-navigation/native';

export default function Signup({ navigation }: { navigation: NavigationProp<any> }) {
  /* const navigation = useNavigation(); */

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const handleSignup = () => {
    let isValid = true;

    if (username.trim() === '') {
      setUsernameError('Username must not be empty');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (email.trim() === '') {
      setEmailError('Email must not be empty');
      isValid = false;
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError('Not a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Password must not be empty');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password should have at least 8 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (confirmPassword === '') {
      setConfirmPasswordError('Confirm password must not be empty');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (isValid) {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Let's get started</Text>

          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="user" size={22} color="#7C888D" />
            </View>
            <TextInput 
              style={styles.input} 
              placeholder='Username' 
              placeholderTextColor="#7C888D" 
              selectionColor="#3662AA"
              onChangeText={(text) => {
                setUsername(text);
                setUsernameError('');
              }}
              value={username}
            />
          </View>
          {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="mail" size={22} color="#7C888D" />
            </View>
            <TextInput 
              style={styles.input} 
              placeholder='Email ID' 
              placeholderTextColor="#7C888D" 
              selectionColor="#3662AA"
              onChangeText={(text) => {
                setEmail(text);
                setEmailError('');
              }}
              value={email}
            />
          </View>
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <View style={styles.inputContainer}>
  <View style={styles.icon}>
    <Feather name="lock" size={22} color="#7C888D" />
  </View>
  <TextInput 
    style={styles.input} 
    placeholder="Password" 
    placeholderTextColor="#7C888D" 
    selectionColor="#3662AA"
    secureTextEntry={!showPassword}
    onChangeText={(text) => {
      setPassword(text);
      setPasswordError('');
    }}
    value={password}
  />
  <TouchableOpacity
    style={styles.PasswordViscibileButton}
    onPress={() => setShowPassword(prev => !prev)}
  >
    <Feather name={showPassword ? "eye" : "eye-off"} size={20} color="#7C888D" />
  </TouchableOpacity>
</View>
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

          <View style={styles.inputContainer}>
  <View style={styles.icon}>
    <Feather name="lock" size={22} color="#7C888D" />
  </View>
  <TextInput 
    style={styles.input} 
    placeholder="Confirm Password" 
    placeholderTextColor="#7C888D" 
    selectionColor="#3662AA"
    secureTextEntry={!showConfirmPassword}
    onChangeText={(text) => {
      setConfirmPassword(text);
      setConfirmPasswordError('');
    }}
    value={confirmPassword}
  />
  <TouchableOpacity
    style={styles.PasswordViscibileButton}
    onPress={() => setShowConfirmPassword(prev => !prev)}
  >
    <Feather name={showConfirmPassword ? "eye" : "eye-off"} size={20} color="#7C888D" />
  </TouchableOpacity>
</View>
          {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

          <TouchableOpacity style={styles.LoginButton} onPress={handleSignup}>
            <Text style={styles.LoginButtontext}>Signup</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.orLine}/>
            <Text style={styles.orText}>Or continue with</Text>
            <View style={styles.orLine}/>
          </View>

          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.registerButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.registerButtonText}>
              Already have an account yet? 
              <Text style={styles.registerButtonTextHighlight}> Login!</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },
  icon: {
    marginRight: 15,
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "#eee",
    fontSize: 16,
  },
  PasswordViscibileButton: {
    position: "absolute",
    right: 0,
  },
  LoginButton: {
    backgroundColor: "#3662AA",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  LoginButtontext: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  orLine: {
    height: 1,
    backgroundColor: '#eeeeee',
    flex: 1,
  },
  orText: {
    color: '#7C888D',
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
  },
  googleButton: {
    backgroundColor: '#F2F6F2',
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  googleButtonText: {
    color: '#4E5867',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  registerButton: {
    alignSelf: 'center',
    marginTop: 40,
  },
  registerButtonText: {
    fontSize: 16,
    color: '#7C888D',
  },
  registerButtonTextHighlight: {
    fontSize: 16,
    color: '#3662AA',
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 13,
  },
});
