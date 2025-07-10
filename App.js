import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert, View, Text } from 'react-native';

const App = () => {
  useEffect(() => {
    messaging().requestPermission();
    messaging().getToken().then(token => {
      console.log('FCM Token:', token);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('Notification', remoteMessage.notification?.title ?? 'No title');
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{ marginTop: 50, padding: 20 }}>
      <Text>🚀 CallNotifyApp</Text>
      <Text>Push notifications integrated via FCM!</Text>
    </View>
  );
};

export default App;
