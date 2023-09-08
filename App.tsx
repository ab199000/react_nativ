import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { IUser } from './interfaces';
import User from './components/user/User';

export default function App() {

  const [userInfo, setUserInfo] = useState<IUser>()

  useEffect(()=>{
    axios.get("https://randomuser.me/api")
      .then((response) => {
        console.log(userInfo);
        
        console.log(response.data.results);
        setUserInfo(response.data.results[0])
      })
  },[])


  return(
    <SafeAreaView style={styles.container}>
      {
        userInfo ?  <User  user = {userInfo}/> : <Text>Loading...</Text> 
      }
    </SafeAreaView>
  )
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontSize:50
  }
});
