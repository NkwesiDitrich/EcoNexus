import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import AddReportScreen from './screens/AddReportScreen';
import HistoryScreen from './screens/HistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MenuScreen';
import DocumentationScreen from './screens/DocumentationScreen';
import { ReportProvider } from './Context/ReportContext'; 


const Stack = createNativeStackNavigator();  // stack navigator instance to manage the screen navigation.

export default function App() {
  return (
    <ReportProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Documentation" component={DocumentationScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddReport" component={AddReportScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReportProvider>
  );
}
