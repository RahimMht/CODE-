import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, View } from 'react-native'

export default function Supprimer({ deleteHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="iD of Task to delete"
                onChangeText={changeHandler}/>
            <Button
                onPress={() => text.valueOf() == '' ? alert('Enter iD of the Task you want to delete first!!') : deleteHandler(text)}
                title='-'
                color='black' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 150,
        marginBottom: 5,
        padding: 5,
        textAlign: 'right',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    }
})
