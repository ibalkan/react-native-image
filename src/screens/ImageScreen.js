import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
            title="Моренце"
            score={2}
            imageSource={require('../../assets/beach.jpg')}/>
            
            <ImageDetail 
            title="asd 3"
            score={8}
            imageSource={require('../../assets/forest.jpg')}/>
            
            <ImageDetail 
            title="asd" 
            score="4"
            imageSource={require('../../assets/mountain.jpg')}/>
        </View>
    );
};

export default ImageScreen;