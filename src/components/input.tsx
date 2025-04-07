import React, { Text, StyleSheet, TextInput, TextInputProps } from 'react-native'
import { styles } from "@/utils/styles"


type Props = TextInputProps & {
    title: string
}

export function Input({title, ...rest} : Props) {
    return (
<TextInput style={styles.input} placeholder={title} placeholderTextColor="#aaa" {...rest} />
    )
  }