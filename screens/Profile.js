import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Profile Page</Text>
            </View>
        )
    }
}