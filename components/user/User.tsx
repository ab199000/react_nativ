import { StyleSheet, StatusBar, Text, View, Image } from 'react-native';
import { useEffect } from 'react';
import { IUser } from '../../interfaces';

interface IProps{
    user: IUser;
}

export default function User(user:IProps){
    
    return(
    <View>
            <Image source = {{uri:user.user.picture.large}} style = {{ width: 200, height: 200 }} />
            <Text style={styles.textStyle}>{user?.user.name.first} {user?.user.name.last}</Text> 
    <StatusBar  />
    </View>
    )
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize:50
  }
});