import React,{Component} from 'react'
import{View,Text,StyleSheet}from 'react-native'
export default class HelloScreen extends Component{
render(){
  return(
    <View style={styles.container}>
    <Text style={styles.text}>Hello Screen</Text>
    </View>
  )
}
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'pink'
  },
  text:{
    color:'white',
    fonSize:30
  }
})