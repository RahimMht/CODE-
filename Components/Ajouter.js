import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default function Ajouter({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="New task"
                onChangeText={changeHandler}/>
            <Button

                onPress={() => text.valueOf() == '' ? alert('No empty Task!!') : submitHandler(text)}
                title="+"
                color='black' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 150,
        marginBottom: 5,
        padding: 5,
        textAlign: 'left',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
