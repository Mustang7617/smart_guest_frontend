import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { mockSecurityData } from '../api/Mockup';

export default function SecurityGuardScreen() {
  const [numPeople, setNumPeople] = useState(mockSecurityData.numPeople);
  const [numPlate, setNumPlate] = useState(mockSecurityData.numPlate);
  const [reason, setReason] = useState(mockSecurityData.reason);
  const [carImage, setCarImage] = useState(mockSecurityData.carImage);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setCarImage(result.assets[0].uri);
    }
  };

  const submitGuestInfo = () => {
    console.log({
      numPeople,
      numPlate,
      reason,
      carImage,
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Number of People</Text>
      <TextInput
        value={numPeople}
        onChangeText={setNumPeople}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Number Plate</Text>
      <TextInput
        value={numPlate}
        onChangeText={setNumPlate}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Reason for Visit</Text>
      <TextInput
        value={reason}
        onChangeText={setReason}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TouchableOpacity onPress={pickImage}>
        <Text style={{ marginBottom: 10 }}>Take a Picture of the Car</Text>
      </TouchableOpacity>

      {carImage && (
        <Image source={{ uri: carImage }} style={{ width: 200, height: 200 }} />
      )}

      <Button title="Submit" onPress={submitGuestInfo} />
    </View>
  );
}
