import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const submitHandler = () => {
    setImageUrl(text);
  }
  return (
    <View style={styles.container}>
      <Text>Input Image URL:</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        multiline={true}
        style={styles.inputText}
        placeholder='Image Url'
      />
      <Button title='Submit' onPress={submitHandler}/>
      {imageUrl && <Image source={{uri: imageUrl}} style={styles.image}/>}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    borderWidth: 1,
    width: "90%",
    height: 100
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 20
  }
});
