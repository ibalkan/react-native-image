import React from 'react';
import { Text, StyleSheet } from 'react-native';


const ComponetsScreen = () => {
    
    return <Text style={style.textStyle} >This is components screen</Text>
        
    
};

const style = StyleSheet.create({
    textStyle: {
       fontSize: 30 
    }
});


export default ComponetsScreen;