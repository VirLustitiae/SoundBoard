import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './components/LoginScreen'; 
import TabOne from './components/TabOne';
import TabTwo from './components/TabTwo';
import Contact from './components/Contact';
import Features from './components/Features';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Definição de MyTabs
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="LuLa" component={TabOne} />
      <Tab.Screen name="Bolsonaro" component={TabTwo} />
    </Tab.Navigator>
  );
}

// Definição de MyDrawer
function MyDrawer({ isLogged }) {
  return (
    <Drawer.Navigator initialRouteName={isLogged ? "SoundBoard" : "Login"}>
      {isLogged ? (
        <>
          <Drawer.Screen name="SoundBoard" component={MyTabs} />
          <Drawer.Screen name="Contato" component={Contact} />
          <Drawer.Screen name="Features" component={Features} />
        </>
      ) : (
        <Drawer.Screen name="Login" component={LoginScreen} />
      )}
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '123') {
      setIsLogged(true);
      alert('Login concluído com sucesso!');
    } else {
      alert('Credenciais incorretas! Tente novamente.');
    }
  };
  useEffect(() => {
    setIsLogged(false);
  }, []);

  return (
    <NavigationContainer>
      {isLogged ? (
        <MyDrawer isLogged={isLogged} />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
