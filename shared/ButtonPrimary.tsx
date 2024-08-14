import React from 'react'
import { Pressable, Text } from 'react-native'
import { GLOBALS } from './globals'

interface Props {
    label: string;

    onPress?: () => void;
}

export const ButtonPrimary = ({ label, onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={ GLOBALS.buy_button }>
            <Text style={{ color: 'white', fontWeight: '700', textAlign: 'center' }}>
                { label }
            </Text>
        </Pressable>
    )
}
