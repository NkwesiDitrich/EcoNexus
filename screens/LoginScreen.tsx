import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from "@expo/vector-icons";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';



import { NavigationProp } from '@react-navigation/native';

export default function LoginScreen({ navigation }: { navigation: NavigationProp<any> }) {
   /* const navigation = useNavigation(); */ 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateAndLogin = () => {
    setEmailError('');
    setPasswordError('');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError('The email must not be empty');
    } else if (!emailPattern.test(email)) {
      setEmailError('Not a valid email');
    }

    if (!password) {
      setPasswordError('The password should not be empty');
    } else if (password.length < 8) {
      setPasswordError('Password must contain at least 8 characters');
    }

    if (
      emailPattern.test(email) &&
      password &&
      password.length >= 8
    ) {
      navigation.navigate('Home');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert("It's your problem");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView 
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Hey, Welcome Back</Text>

          {/* Email input */}
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="mail" size={22} color="#7C888D" />
            </View>
            <TextInput 
              style={styles.input} 
              placeholder='Email ID' 
              placeholderTextColor="#7C888D"
              selectionColor="#3662AA"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}

          {/* Password input */}
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="lock" size={22} color="#7C888D" />
            </View>
            <TextInput 
              style={styles.input} 
              placeholder='Password' 
              placeholderTextColor="#7C888D"
              selectionColor="#3662AA"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity style={styles.PasswordViscibileButton} onPress={togglePasswordVisibility}>
              <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} color="#7C888D" />
            </TouchableOpacity>
          </View>
          {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}

          <TouchableOpacity style={styles.ForgetpasswordButton} onPress={handleForgotPassword}>
            <Text style={styles.ForgetPasswordText}> Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.LoginButton} onPress={validateAndLogin}>
            <Text style={styles.LoginButtontext}>Login</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.orLine}/>
            <Text style={styles.orText}>Or continue with</Text>
            <View style={styles.orLine}/>
          </View>

          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}> Google</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.registerButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.registerButtonText}>
              Not have an account yet? 
              <Text style={styles.registerButtonTextHighlight}> Register Now!</Text>
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
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
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
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 13,
  },
  PasswordViscibileButton: {
    position: "absolute",
    right: 0,
  },
  ForgetpasswordButton: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  ForgetPasswordText: {
    color: "#3662AA",
    fontSize: 16,
    fontWeight: '500',
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
});
