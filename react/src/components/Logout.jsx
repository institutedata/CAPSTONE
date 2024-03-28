import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation

const Logout = () => {
  const navigation = useNavigation(); // React Navigation's navigation object

  const handleLogout = () => {
    // Perform logout actions, such as clearing local storage or sending a logout request to the server
    AsyncStorage.removeItem('token'); // Clear the JWT token from AsyncStorage

    // Navigate the user to the login page or any other desired page
    navigation.navigate('Login');
  };

  return (
    <Button title="Logout" onPress={handleLogout} />
  );
};

export default Logout;
