import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Valeur({ item }) {

    const [toggle, setToggle] = useState(false);
    const toggleFunction = () => {
        setToggle(!toggle);
    };

    return (
        <TouchableOpacity onPress={() => toggleFunction()}>
            {/* <Text style={styles.singleItem}>{item.text}</Text> */}
            {toggle ?
                <Text style={styles.touchableSelected}>{item.text}</Text>
                :
                <Text style={styles.singleItem}>{item.text}</Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    singleItem: {
        margin: 5,
        padding: 5,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    touchableSelected: {
        margin: 5,
        padding: 5,
        borderColor: '#bbb',
        backgroundColor: 'coral',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})
