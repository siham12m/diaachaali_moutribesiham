import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}></View>
                <Image style={styles.avatar} source={require('./karima.jpg')} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>Karima Maarouf</Text>
                        <Text style={styles.info}>System and virtualization engineer</Text>
                        <Text style={styles.description}>At CGI
Total duration 1 year
Job titleSystem and virtualization engineer
Full-time
Date of employment. 2019 - Today
Duration of employment 5 months
LocationCasablanca, Grand Casablanca, Morocco
Internship Trainee
Dates of employment 2019 - August 2019
Duration of employment: 7 months
LocationCasablanca Prefecture, Morocco
Implementation of a vulnerability audit solution for the CGI datacenter</Text>

                       
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text>Contact</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});
