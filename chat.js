//'use strict';
import React, {Component} from 'react';
//import FCM from 'react-native-fcm';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Modal,
    ScrollView,
    NativeModules
} from 'react-native';

import Kommunicate from 'react-native-kommunicate-chat'

//var Kommunicate = NativeModules.RNKommunicateChat;

export default class AwesomeProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Create Chat'
        };
        this.createChat = this.createChat.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnMount(){
        this.refreshUnsubscribe();
    }
    openModal() {
        this.setState({modalVisible:true});
      }

    closeModal() {
        this.setState({modalVisible:false});
    }
    openOneToOneChat(){
     alert("");
    }

    show() {
        this.setState({title: 'Loading....!'});
    }

    render() {
            return (
			  <View style = {styles.container}>
        <Text style = { styles.titleText} >
            Kommunicate </Text>
			  <Text style = {styles.baseText}>
     			  Demo App </Text>
			  <Text style = {styles.btn} onPress = {this.createChat}>Create Chat</Text>
              <Button title = {this.state.title}
                 onPress = {this.createChat}
                 color = "#20B2AA"/>
		    </View>
        );
    }
    //======================== Applozic fucntions ==========================================================

        //Login chat to the users..
        createChat() {
            var conversationObject = {
                applicationId : '22823b4a764f9944ad7913ddb3e43cae1',
                userId : "reytum",
                password : 'reytum'
            };
            Kommunicate.buildConversation(conversationObject, (response)=> {
               console.log("REytum response : " + response);
            });
        }
    //======================== Applozic fucntions END===================================================
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4D394B'
    },
    btn: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'yellow',
        marginTop: 20,
        alignSelf: 'center'
    },
    baseText: {
        fontFamily: 'Cochin',
        color: '#fff',
        marginBottom: 25,
        alignSelf: 'center'
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
        alignSelf: 'center'
    },
    inputText: {
        width: 330,
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 6,
        padding: 10,
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10
    }
});