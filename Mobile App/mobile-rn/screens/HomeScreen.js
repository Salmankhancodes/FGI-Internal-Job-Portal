import { signOut } from '@firebase/auth'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
    const navigation = useNavigation()

    const logout = () => {
        signOut(auth)
        .then(() => {
            navigation.navigate('Welcome')
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <View>
            <Text>Email Verified</Text>
            <Button title="Logout" onPress={logout} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
