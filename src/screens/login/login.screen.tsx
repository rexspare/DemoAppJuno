import { View, Text, Image } from 'react-native'
import React, { FC, useState } from 'react'
import { AppHeader, Layout, PrimaryButton, PrimaryInput, Spacer } from '../../components'
import styles from './login.styles'
import IMAGES from '../../assets/images'
import { validateEmail } from '../../utils'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { InitialNavigationStackParamList } from '../../navigation/root'
import { ROUTES } from '../../navigation/routes'

const LoginScreen: FC = () => {
    const navigation = useNavigation<NavigationProp<InitialNavigationStackParamList>>();

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    return (
        <Layout fixed={true}>
            <AppHeader
                title='Login'
                showBackIcon={true}
            />

            <Layout contentContainerStyle={styles.main}>

                <Image
                    source={IMAGES.appLogo}
                    style={styles.img}
                />

                <PrimaryInput
                    title="Email"
                    value={email}
                    onChange={setemail}
                />

                <PrimaryInput
                    title="Password"
                    value={password}
                    onChange={setpassword}
                    isPassword={true}
                />

                <PrimaryButton
                    title='Login'
                    disabled={!validateEmail(email) || password === ''}
                    onPress={() => navigation.replace(ROUTES.HOME)}
                    style={styles.btn}
                />

            </Layout>
        </Layout>
    )
}

export default LoginScreen