import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Dimensions} from 'react-native';

const slides = [
  {
    key: 'one',
    title: 'Title 1, page 1',
    text: 'Description.\nSay something cool',
    image: require('./assets/favicon.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title , page 2',
    text: 'Other cool stuff',
    image: require('./assets/favicon.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/favicon.png'),
    backgroundColor: '#22bcb5',
  }
]

export default function App() {
  state = {showHomePage: false}
  renderItem = ({item}) =>{
    return(
      <View style={{flex:1}}>
      <Image 
      source={item.image}
      style={{
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
      }} />

      <Text style={{
        alignSelf:'center',
        fontSize:40,
        fontWeight:'bold',
        paddingTop:30,
        fontFamily:'Verdana',
        color:'#d48524',
      }}>{item.title}</Text>
      <Text style={{
        margin: 30,
        fontSize:18,
        textAlign:'center',
        fontFamily:'Verdana',
        opacity: 0.5,
        color:'#283542',
      }}>{item.text}</Text>
    </View>
    )
  }
  return (
   <AppIntroSlider
   renderItem={this.renderItem}
   data={slides}
   activeDotStyle={{backgroundColor:'#d48524', width:30}}
   
   />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
