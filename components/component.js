import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {useState} from 'react'

export default function Component(props) {
  const [firstBoxHeight, setFirstBoxHeight] = useState(0);

  function altura(event){
    const { height } = event.nativeEvent.layout;
    setFirstBoxHeight(height);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.color, { height: firstBoxHeight }]}>
      </View>
      <View style={styles.infoRow} onLayout={altura}>
        <Text styles={styles.info}>{props.info}</Text>
      </View>

      <View style={styles.check}>
        <TouchableOpacity onPress={props.onPress}>
          <Entypo name="trash" size={25} color= '#FF4B4B'/>
        </TouchableOpacity> 
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'start',
    marginBottom: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    width: "100",
    borderRadius: 50,
    borderColor: 'lightgray',
    paddingHorizontal: 12
  },
  check: {
    paddingHorizontal: 10,
    paddingVertical: 11,
  },
  infoRow: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10
  },
  color: {
    flexDirection: 'collumn',
    backgroundColor: '#000',
    marginRight: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#000',
    borderWidth: 3,
    height: 35,
    width: 5,
  }
});
