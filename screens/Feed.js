import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    FlatList
} from "react-native";
import PostCard from './PostCard';

let posts = require("./temp_posts.json");

export default class Feed extends Component {
    renderItem = ({ item: post }) => {
        return <PostCard post={post} />;
      };
    
    keyExtractor = (item, index) => index.toString();
    
    render() {
        return (
        <View style={styles.container}>
            <SafeAreaView style={styles .droidSafeArea} />
            <View style={styles.appTitle}>
                <View style= {styles .appIcon}>
                    <Image source={require("../assets/logo.png")}
                            style={styles.iconImage}
                    ></Image>
            </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles .appTitleText}>Spectagram</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <FlatList
                    keyExtractor={this.keyExtractor} 
                    data={posts} 
                    renderItem={this.renderItem}
                />
            </View>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
    flex: 1, backgroundColor: "black"
    },
    droidSafeArea: {
    marginTop: Platform.OS ===
    "android" ? StatusBar. currentHeight : RFValue (35)
    },
    appTitle: {
    flex: 0.07, flexirection: "row"
    },
    appIcon: {
    flex: 0.2, justifycontent: "center", alignItems: "center"
    },
    iconImage: {
    width: "100%", height: "100%", resizeMode: "contain"
    },
    appTitleTextContainer: {
    flex: 0.8, justifyContent: "center"
    },
    appTitleText: {
    color: "white", fontsize: RFValue (28),
    },
    cardContainer: {
    flex: 0.85
    },
})