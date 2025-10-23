import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';

const CategoryCards = ({backgroundColor, title, titleColor = '#FFF'}) => 
(
  <TouchableOpacity style= {[styles.card, {backgroundColor}]}>
    <Text style={[styles.cardText, {color: titleColor}]}></Text>
  </TouchableOpacity>
);

export default function Home() {
  return(
    <SafeAreaView style ={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Image 
      source={require('./assents/R.jpg')} 
      style={styles.headerImage}/>
      <View style={styles.titleContainer}>
      <Text style={styles.mainTitle}>Guia de Prias</Text>
      <Text style={styles.subTitle}>Planeje sua Viagem</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
  },
    headerImagem:{
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  },
   titleContainer:{
   marginVertical: 34,
   alignItems: 'center',
   },
   
   mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e63ff',
   },
   subTitle: {
    fontSize: 16,
    color:'#48d6d2',
    marginTop: 4,
   },
   grid: {
    width: '90%',

   },
   row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
   },
   card:{
    width: '48%',
    height: 120,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000',
    textShadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
   },
   cardText: {
    fontSize: 18,
    fontWeight: 'bold',
   },
});