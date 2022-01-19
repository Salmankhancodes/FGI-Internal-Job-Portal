import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { auth } from '../firebase'

const WelcomeScreeen = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text style={tailwind("text-green-500 text-4xl")}>This is Welcome Screen</Text>
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

export default WelcomeScreeen

const styles = StyleSheet.create({})
