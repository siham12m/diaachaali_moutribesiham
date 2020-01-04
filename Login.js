

import React from 'react'
import { StyleSheet, View, TextInput, Button, Image} from 'react-native'



class Login extends React.Component {


    render() {
        return (
            <View style={styles.main_container}>

                <Image
                    style={styles.image}
                    source={require('./logo.png') }
            />

                <TextInput style={styles.textinput} placeholder='Name'  />
                <TextInput style={styles.textinput} placeholder='Mot de Passe'  />
                <Button style={styles.button} title='Login' />
       
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    image: {
       
     

    }
      ,
    button: {
        
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        width: 3330,
        borderWidth: 1,
        paddingLeft: 5
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        width: 330,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
  
})

export default Login