import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { mockGuestList } from '../api/Mockup';


export default function HomeOwnerScreen() {
  const handleAccept = (id) => {
    console.log(`Accepted guest with ID: ${id}`);
  };

  const handleDecline = (id) => {
    console.log(`Declined guest with ID: ${id}`);
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 }}>
      <Text>{item.name} - {item.arrivalTime}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title="Accept" onPress={() => handleAccept(item.id)} />
        <Button title="Decline" onPress={() => handleDecline(item.id)} color="red" />
      </View>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={mockGuestList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
