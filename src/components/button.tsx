import React, { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'
import { styles } from "@/utils/styles"


type Props = TouchableOpacityProps & {
    title: string
}

export function Button({title, ...rest} : Props) {
    return (
        <TouchableOpacity style={styles.button}activeOpacity={0.8} {...rest}>
        <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
  }
