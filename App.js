
import {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View ,StatusBar,Linking} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Tts from 'react-native-tts';
// import Clipboard from '@react-native-clipboard/clipboard';
// import Snackbar from 'react-native-snackbar';




// Tts.setDefaultLanguage('en-GB');
// Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
// Tts.setDefaultRate(0.5);
// Tts.setDefaultRate(1.2);

// const copyToClipboard = () => {
//   Clipboard.setString(quote);
//   Snackbar.show({
//     text: 'Quote Copied',
//     duration: Snackbar.LENGTH_SHORT,
//   });
// }



export default function App() {


const [quote, setQuote] = useState("Loading...");
const [author, setAuthor] = useState("Loading...");
const [isLoading, setIsLoading] = useState(false);

 const randomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
      //  console.log(result);
       setQuote(result.content);
       setAuthor(result.author)
       setIsLoading(false);
    })
 }


      useEffect(() => {
        randomQuote();
      },[]);

      // const speakNow = () => {
      //   Tts.speak(quote);
      // }

      const tweetNow = () => {
        const url = "https://twitter.com/intent/tweet?text=" + quote;
        Linking.openURL(url);
      }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/> 
     <View style={styles.mainCart}>
      <Text style={styles.quetsHed}>Today Quotes</Text>
      <FontAwesome5 name="quote-left" style={{fontSize:16, marginBottom:-12}} color="#000"  />
      <Text style={styles.qute}>
         {quote}
      </Text>
      <FontAwesome5 name="quote-right" style={{fontSize:16, textAlign:'right',marginTop:-20,marginBottom:20}} color="#000"  />
      <Text style={{textAlign:'right',fontWeight:'400',fontSize:16}}>- {author} </Text>
     <TouchableOpacity 
     style={{
       backgroundColor:isLoading ? 'rgba(83, 114, 240, 0.7)' : 'rgba(83, 114, 240, 1)',
       padding:20, 
       borderRadius:30,
       marginVertical:20, }} 
       onPress={randomQuote}> 
     <Text style={{color:'#fff',textAlign:'center',fontSize:18,fontWeight:'500'}}>
       {isLoading ? "Loading..." : "New Quote"}
       </Text>
     </TouchableOpacity>
     <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
      <TouchableOpacity 
      onPress={()=>{}}
      style={{
        borderWidth:2, 
        borderColor:'#5372F0', 
        borderRadius:50,
        padding:15}}>  
        <FontAwesome name="volume-up" size={22} color="#5372F0"/> 
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>{}}
      style={{
        borderWidth:2, 
        borderColor:'#5372F0', 
        borderRadius:50,
        padding:15}}>  
        <FontAwesome5 name="copy" size={22} color="#5372F0"/> 
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={tweetNow}
      style={{
        borderWidth:2, 
        borderColor:'#5372F0', 
        borderRadius:50,
        padding:15}}>  
        <FontAwesome name="twitter" size={22} color="#5372F0"/> 
      </TouchableOpacity>
     </View>
     </View>
     {/* <View style={styles.mainCart}></View>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5372F0',
    alignItems: 'center',
    justifyContent: 'center',},

    mainCart: {
    width: '90%',
    backgroundColor : '#fff',
    borderRadius :20,
    padding: 20,
    marginBottom:20,
  },

  quetsHed: {
   textAlign : 'center',
   fontSize : 26,
   fontWeight: '600',
   color :'#333',
   marginBottom:20,
  },

  qute :{
  color : '#000',
  fontSize:16,
  lineHeight:26,
  letterSpacing:1.1,
  fontWeight: '400',
  textAlign:'center',
  marginBottom: 10,
  paddingHorizontal:30
  }
});