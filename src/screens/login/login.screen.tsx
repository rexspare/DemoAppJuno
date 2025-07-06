import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import { Image } from 'react-native'
import IMAGES from '../../assets/images'
import { AppHeader, AppText, Layout, PrimaryButton, PrimaryInput } from '../../components'
import { InitialNavigationStackParamList } from '../../navigation/root'
import { ROUTES } from '../../navigation/routes'
import { validateEmail } from '../../utils'
import styles from './login.styles'

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

                <AppText>* Input any valid Email and a password</AppText>

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