import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'

export default class HomeScreen extends React.Component {

constructor(){
  super();
  this.state = {
    text:'',
    displayText:''
  }
}

  render() {
    return (
      <View style={styles.container}>
        <Header backgroundColor='#9c8218' 
          centerComponent={{text:'Pocket Dictionary', style:{color:"0FFF", fontSize:"20"}}}/>
        <TextInput style={styles.inputBox} 
          onChangeText ={(text)=>{
            this.setState({text:text
            isSearchPressed: false,
            word:"Loading.....",
            lexicalCategory:'',
            example:[],
            defination:""
            }) 
          }}  
          valua={this.state.text}
        />
        <TouchableOpacity style={styles.goButton}
        onPress={()=>{
          this.setState({displayText:this.state.text})
        }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>
          {this.state.displayText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: { marginTop: 200, width: '80%', alignSelf: 'center', height: 40, textAlign: 'center', borderWidth: 4, outline: 'none'
  },
  goButton: { width: '50%', height: 55, alignSelf: 'center', padding: 10, margin: 10
  }, 
  buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold', }, displayText: { textAlign: 'center', fontSize: 30
  },
});
