<<<<<<< HEAD:src/containers/CreateAccount/CreateAccount.tsx
import React, { useEffect, useRef, useState } from 'react';
import { View, Alert } from 'react-native';
import CoreTextInput from '../../components/core/CoreTextInput';
import NewButton from '../../components/NewButton/NewButton';
=======
import React, { useDebugValue, useEffect, useRef, useState } from 'react';
import {View, Alert} from 'react-native'
import CoreTextInput from '../components/core/CoreTextInput';
import NewButton from '../components/NewButton';
>>>>>>> fdde0fcff6c4bbf819e13d46864902f0df490c62:src/containers/CreateAccount.tsx

/**
 * Allow user to enter in:
 * email
 * full name
 * username
 * password
 * submit/signup button
 */

function CreateAccount() {
  // const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null)
  const [username, setUsername] = useState('');

  // console.log('emailref', emailRef)c
  // emailRef.current.username = 'test'
  useEffect(() => {
    emailRef.current.focus()
  }, [])


  
  // console.log('emailref current viewconfig valid attributes', emailRef.current.viewConfig.validAttributes);
  return(
    <View>
      <CoreTextInput ref={emailRef} value={username} onChangeText = {(text) => setUsername(text)} labelText = 'Email' placeholder='John@apple.com'/>
      <CoreTextInput ref={passwordRef} labelText = 'Full Name' placeholder='John Appleseed'/>
      <CoreTextInput ref={passwordRef} labelText = 'Username' placeholder='JohnApp'/>
      <CoreTextInput ref={passwordRef} labelText = 'Password' placeholder='Password' secureTextEntry={true}/>
      <NewButton text = 'Submit' onLongPress={() =>   Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )} />
    
    </View>
  )
}

export default CreateAccount;
  