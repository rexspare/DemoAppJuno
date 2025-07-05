import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZE, hp } from '../assets/styleGuide';
import { InitialNavigationStackParamList } from '../navigation/root';
import AppText from './appText';
import If from './if';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface IAppHeaderProps {
    title?: string;
    showBackIcon?: boolean
}

const AppHeader: FC<IAppHeaderProps> = (props) => {
    const {
        title,
        showBackIcon = false
    } = props
    const navigation = useNavigation<NavigationProp<InitialNavigationStackParamList>>();
    return (
        <View style={styles.main} >

            {showBackIcon ? (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.btn, { alignItems: 'flex-start' }]}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name='left' color={COLORS.WHITE} size={hp(2)} />
                </TouchableOpacity>
            ) : (
                <View style={styles.btn} />
            )}

            <If condition={title}>
                <AppText semiBold={true} style={styles.title}>{title}</AppText>
            </If>

            {/* Empty View to balance layout if no right button is present */}
            <View style={styles.btn} />

        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    main: {
        width: '100%',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: hp(1),
        backgroundColor: COLORS.BACKGROUND,
    },
    btn: {
        minWidth: hp(3.4),
        minHeight: hp(3.4),
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        fontSize: FONT_SIZE._16,
        flex: 1,
        textAlign: 'center'
    },
})