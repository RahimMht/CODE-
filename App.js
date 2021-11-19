import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Valeur from './Components/Valeur';
import Ajouter from './Components/Ajouter';
import Supprimer from './Components/Supprimer';

export default function App() {

  const [leftTasks, setLeftTasks] = useState([]);
  const [rightTasks, setRightTasks] = useState([]);

  const submitHandler = (text) => {
    setLeftTasks((previousTasks) => {
      return [
        { text: text, key: leftTasks.length + 1 },
        ...previousTasks
      ]
    })
  };

  const deleteHandler = (key) => {
    setLeftTasks((previousTasks) => {
      return previousTasks.filter(task => task.key != key);
    })
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Text style={styles.title}>Projet SJP5</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.leftContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={leftTasks}
              renderItem={({ item }) => (
                <Valeur item={item}/>
              )}>
            </FlatList>
          </View>
          <View>
            <TouchableOpacity style={styles.leftToRightBtn}>
              <Text>&gt;&gt;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightToLeftBtn}>
              <Text>&lt;&lt;</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightContainer}>
          <FlatList
              showsVerticalScrollIndicator={false}
              data={rightTasks}
              renderItem={({ item }) => (
                <Valeur item={item}/>
              )}>
            </FlatList>
          </View>
        </View>
        <View>
          <Ajouter submitHandler={submitHandler} />
          <Supprimer deleteHandler={deleteHandler}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: 10,
    margin: 10,
    textAlign: 'center',
    borderWidth: 2,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    width: 150,
    height: 400,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftToRightBtn: {
    paddingBottom: 5,
  },
  rightToLeftBtn: {
    paddingTop: 5,
  },
  rightContainer: {
    width: 150,
    height: 400,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
