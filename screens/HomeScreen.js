import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Use any icon library you prefer

const CharacterScreen = () => {
  return (
    <LinearGradient
      colors={['#131416', '#484C57']}
      style={styles.linearGradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient
          colors={['#131416', '#484C57']}
          style={styles.trendingSection}
        >
          <Text style={styles.trendingTitle}>Popular Camera</Text>
          <Text style={styles.trendingSubtitle}>Nikon Z5</Text>
          <View style={styles.characterGrid}>

          <TouchableOpacity style={styles.imageContainer}>
            <Image
              source={require('../assets/back.png')}
              style={styles.characterImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              source={require('../assets/side.png')}
              style={styles.characterImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              source={require('../assets/top.png')}
              style={styles.characterImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              source={require('../assets/Main_Image.png')}
              style={styles.characterImage}
            />
          </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={styles.characterList}>
          <TouchableOpacity style={styles.characterItem}>
            <View style={{ paddingLeft: 20 }}>
              <Text style={styles.characterName}>Canon EOS 30D</Text>
              <Text style={styles.characterDescription}>$16000</Text>
            </View>
            <Image source={require('../assets/canon.png')} style={styles.characterIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.characterItem}>
            <View style={{ paddingLeft: 20 }}>
              <Text style={styles.characterName}>Nikon D72000</Text>
              <Text style={styles.characterDescription}>$18000</Text>
            </View>
            <Image source={require('../assets/sony2.png')} style={styles.characterIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.characterItem}>
            <View style={{ paddingLeft: 20 }}>
              <Text style={styles.characterName}>Sony 200mm Zoom</Text>
              <Text style={styles.characterDescription}>$6000</Text>
            </View>
            <Image source={require('../assets/sony.png')} style={styles.characterIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <LinearGradient
        colors={['#131416', '#484C57']}
        style={styles.tabBar}
        start={{ x: 0, y: 0 }} // Adjust gradient angle (210 degrees)
        end={{ x: 0, y: 1 }}
      >
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={30} color="#fff" />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="compass" size={30} color="#fff" />
          <Text style={styles.tabLabel}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="chat" size={30} color="#fff" />
          <Text style={styles.tabLabel}>Chat History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="account" size={30} color="#fff" />
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  linearGradient: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: '#484C57',
    padding: 10, // Optional: adds spacing inside the container
    borderRadius: 8, // Optional: rounded corners
    marginHorizontal: 4,
    marginVertical: 4
  },
  trendingSection: {
    padding: 20,
    marginHorizontal: 30,
    marginTop: 70,
    borderRadius: 12,
    height: 367,
    elevation: 10,
    shadowColor: '#092332',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  trendingTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  trendingSubtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300',
  },
  characterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  characterImage: {
    width: 100, // Set the appropriate width for the image
    height: 100, // Set the appropriate height for the image
    resizeMode: 'contain', // Adjust the image to fit inside the container
    marginBottom: 10,
    borderRadius: 10,
  },
  characterList: {
    padding: 20,
  },
  characterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 42,
    elevation: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  characterIcon: {
    width: 100,
    height: 81,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  characterDescription: {
    fontSize: 14,
    color: '#888',
  },
  tabBar: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
});

export default CharacterScreen;