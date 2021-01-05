import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function InstaGitHubCard({ githubUser }) {
  const [liked, setLikeState] = useState(false);
  return (
    <View>
      <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
        <Image
          style={{
            marginRight: 15,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}


          source={{
            uri: `https://github.com/${githubUser}.png`
          }}
        />
        <Text>{githubUser}</Text>
      </View>

      <Image
        style={{
          width: '100%',
          height: 350,
          borderRadius: 20,
        }}
        source={{
          uri: `https://github.com/${githubUser}.png`
        }}
      />



      <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => setLikeState(!liked)}>
          {liked && <Ionicons name="ios-heart" size={24} color="red" />}
          {!liked && <Ionicons name="ios-heart-outline" size={24} color="black" />}
        </TouchableOpacity>
      </View>
    </View>


  )

}


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          [
            'dudukb',
            'vweberfroes',
            'gabrielfroes',
            'peas'
          ].map((githubUser) =>
            <InstaGitHubCard key={githubUser} githubUser={githubUser} />
          )}
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
