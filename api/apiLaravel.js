import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const login = async (email, password) => {
    try {
      const response = await fetch('http://192.168.1.106:8000/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const responseData = await response.json();
      if (response.ok) {
        // Connexion réussie, stocker le Jeton d'accès (Access Token) dans le stockage local (local storage) de l'application
        await AsyncStorage.setItem('access_token', responseData.token);
        return responseData;
      } else {
        // Erreur lors de la connexion
        throw new Error(responseData.message || 'Error logging in');
      }
    } catch (error) {
      // Erreur lors de la connexion
      throw error;
    }
};

export const getAuthUser = async () => {
    const accessToken = await AsyncStorage.getItem('access_token'); // récupérer le Jeton d'accès (Access Token) depuis le stockage local (local storage) de l'application mobile
    if (!accessToken) {
      throw new Error('Access Token not found');
    }
    try {
      const response = await fetch('http://192.168.1.106:8000/api/user', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}` // ajouter le Jeton d'accès (Access Token) à l'en-tête Authorization
        }
      });
      const responseData = await response.json();
      if (response.ok) {
        // Récupération des informations de l'utilisateur réussie
        return responseData;
      } else {
        // Erreur lors de la récupération des informations de l'utilisateur
        throw new Error(responseData.message || 'Error fetching user');
      }
    } catch (error) {
      // Erreur lors de la récupération des informations de l'utilisateur
      throw error;
    }
};

/*export const getAuthUser = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Access token not found');
      }
  
      const response = await fetch('http://example.com/api/user', {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      const responseData = await response.json();
      if (response.ok) {
        return responseData.user;
      } else {
        throw new Error(responseData.message || 'Error fetching user info');
      }
    } catch (error) {
      throw error;
    }
  };*/
