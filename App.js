import {Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {Entypo} from '@expo/vector-icons'
import Component from './components/component'
import React, {useState} from 'react'

{/*Comentário*/}

export default function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([]);

  function addTask(){
    if(task.trim() !== ''){
      setTasks([...tasks, {id: Math.random(), text: task}])
      setTask('')
    }
  }
  function deleteTask(id){
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <View style={styles.container}>

        <Text style={styles.title}>ToDo List</Text>


          <View style={styles.containerInput}>
            <TextInput  style={styles.input} value={task == '' ? '' : task} placeholder='Insert a new task' onChangeText={(text) => setTask(text)}/>
            <TouchableOpacity style={styles.button}>
              <Entypo name='circle-with-plus' size={40} onPress={() => addTask()}/>
            </TouchableOpacity>
          </View>


      <FlatList style={styles.flat} data={tasks} renderItem={({item}) => <Text style={styles.info}><Component info={item.text} onPress={() => {deleteTask(item.id)}}/></Text>} keyExtractor={(item) => item.id}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 8,
    background: 'linear-gradient(180deg, #eee, #666)',
    alignItems: 'center',
    marginTop: 50,
  },
  title:{
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 700,
    marginBottom: 20,
    color: '#000'
  },
  input: {
    borderWidth: 4,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 50,
    fontWeight: 600,
    outline: 'none',
    marginRight: 10,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "80%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center'
  },  
  flat: {
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#fff',
    width: 400,
    paddingBottom: 5,
  },
  info: {
    fontSize: 20,
    fontWeight: 600,
  },

})




