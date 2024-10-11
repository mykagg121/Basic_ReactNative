import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function App1(): JSX.Element {
    return(
        <View style={style.container}>
            <Text>App1</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default App1;