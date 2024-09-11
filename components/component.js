import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function Component(props) {
  const [firstBoxHeight, setFirstBoxHeight] = useState(0);

  function altura(event) {
    const { height } = event.nativeEvent.layout;
    setFirstBoxHeight(height);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.color, { height: firstBoxHeight }]}></View>

      <View style={styles.infoRow} onLayout={altura}>
        {props.isEditing ? (
          <View style={styles.editContainer}>
            <TextInput style={styles.editInput} value={props.editingText} onChangeText={props.setEditingText}/>
            <TouchableOpacity onPress={props.onSave} style={styles.saveButton}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.info}>{props.info}</Text>
        )}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={props.onEdit}>
          <FontAwesome name="edit" size={25} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onPress}>
          <Entypo name="trash" size={25} color='#FF4B4B' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    width: "100%",
    borderRadius: 50,
    borderColor: 'lightgray',
    paddingHorizontal: 12
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoRow: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10
  },
  color: {
    backgroundColor: '#000',
    marginRight: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#000',
    borderWidth: 3,
    height: 35,
    width: 5,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
