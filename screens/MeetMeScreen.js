import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import MapView from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';
import { Checkbox } from 'react-native-paper';

const DashboardScreen = ({ navigation }) => {
  const { isDarkTheme } = useTheme();
  const [selectedFriend, setSelectedFriend] = useState();
  const [userAddress, setUserAddress] = useState('');
  const [placeType, setPlaceType] = useState({
    cafe: false,
    bar: false,
    restaurant: false,
    policeStation: false,
    hospital: false,
  });

  // Assuming you have a list of friends from somewhere, e.g., state, context, or props
  const friendsList = ['Alice', 'Bob', 'Charlie'];

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#f3f4f6' }]}>
      <Text style={[styles.text, { color: isDarkTheme ? '#ffffff' : '#000000' }]}>Find Your Meet Spot!</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={MapView.PROVIDER_GOOGLE} // remove if not using Google Maps
      />
      <TextInput
        style={styles.input}
        onChangeText={setUserAddress}
        value={userAddress}
        placeholder="Enter your address"
        placeholderTextColor="#666"
      />
      {/* <Picker
        selectedValue={selectedFriend}
        onValueChange={(itemValue, itemIndex) => setSelectedFriend(itemValue)}
        style={styles.picker}>
        {friendsList.map((friend, index) => (
          <Picker.Item key={index} label={friend} value={friend} />
        ))}
      </Picker> */}
      {/* <View>
        {Object.keys(placeType).map((key) => (
          <View key={key} style={styles.checkboxContainer}>
            <Checkbox
              status={placeType[key] ? 'checked' : 'unchecked'}
              onPress={() => {
                setPlaceType({ ...placeType, [key]: !placeType[key] });
              }}
            />
            <Text style={styles.checkboxLabel}>{key}</Text>
          </View>
        ))}
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: 150,
  },
  map: {
    width: '100%',
    height: 400, // Adjust as needed
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});

export default DashboardScreen;
