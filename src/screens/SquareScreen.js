import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return <View>
        <ColorCounter
            onIncrease={() => setRed(red + COLOR_INCREMENT)}
            onDecrease={() => setRed(red - COLOR_INCREMENT)}
            color="red 1" />

        <ColorCounter
            onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
            onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
            color="blue" />

        <ColorCounter
            onIncrease={() => setGreen(green + COLOR_INCREMENT)}
            onDecrease={() => setGreen(green - COLOR_INCREMENT)}
            color="green" />
        <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
}



export default SquareScreen;