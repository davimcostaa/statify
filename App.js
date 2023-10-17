import React from 'react';
import { View, Button, Linking } from 'react-native';
import { CLIENT_ID} from "@env";
console.log(`CLIENT_ID: ${CLIENT_ID}`);
const client_id = process.env.CLIENT_ID;
const redirect_uri = 'http://localhost:8888/callback';
console.log(client_id)
const scope = 'user-read-private user-read-email';

const LoginScreen = () => {
  const handleLogin = () => {
    const authorizationUrl = `https://accounts.spotify.com/authorize?` +
      `response_type=code` +
      `&client_id=${client_id}` +
      `&scope=${scope}` +
      `&redirect_uri=${redirect_uri}`;

    // Redirecionar o usuário para a URL de autorização do Spotify
    // Isso pode ser feito usando um navegador da web integrado ou uma biblioteca de navegação como 'react-navigation'.
    // Por exemplo, usando o Linking do React Native:
    Linking.openURL(authorizationUrl);
  };

  return (
    <View>
      <Button title="Login with Spotify" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
