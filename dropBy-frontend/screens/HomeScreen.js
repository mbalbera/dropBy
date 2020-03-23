import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Categories from '../components/Categories'
import SearchResults from '../components/SearchResults'

 class HomeScreen extends React.Component {
   state = {
     typed: ""
   }

   onType = (event) => {
     this.setState({ typed: event })
   }
   onChosen = (event) => {
     // console.log("event", event.target.innerText)
     this.setState({ typed: event.target.innerText })
   }
   onClear = () => {
     this.setState({ typed: "" })
   }

   render(){
     console.log('length=' ,this.state.typed.length)
      return (
        <View style={{ backgroundColor: 'rgb(255,246,222)', flex: 1 }}>
          <View style={{height:'20%', paddingTop:'3%',justifyContent:'space-around'}}> 
            <Text style={{margin:'auto', fontSize:26, textAlign: 'center'}}>Need Someone to DropBy?</Text>
          </View>
          <View style={{height:'5%',alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <TextInput
              style={{  justifyContent:'center', width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, textAlign:'center', backgroundColor:'rgb(235,235,235)' }}
              onChangeText={(event) => this.onType(event)}
              value={this.state.typed}
            />
          </View>
          <View style={{height:'75%'}}>
            {this.state.typed.length === 0 ? <Categories /> : <SearchResults typed={this.state.typed} />}
          </View>
        </View>
      );
   }
}

export default HomeScreen
HomeScreen.navigationOptions = {
  header: null,
};

