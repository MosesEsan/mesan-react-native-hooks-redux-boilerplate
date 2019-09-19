import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default function Welcome(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Button title={"Tap To View Instructions"} onPress={() => navigation.navigate('Home')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#F5F5F5',
        justifyContent: "center", alignItems: "center"
    }
});
