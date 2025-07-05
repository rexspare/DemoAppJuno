import React, { ReactNode } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native';
import If from './if';
import { COLORS, COMMON_STYLES, FONT_SIZE, hp } from '../assets/styleGuide';
import AppText from './appText';


interface primaryButtonProps {
    title: string;
    onPress: () => any;
    style?: ViewStyle | [ViewStyle] | any;
    textStyle?: TextStyle | [TextStyle] | any;
    isLoading?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    icon?: ReactNode;
}

const PrimaryButton: React.FC<primaryButtonProps> = (props) => {
    const {
        disabled = false,
        title = 'title',
        onPress = () => { },
        isLoading = false,
        secondary = false,
        icon
    } = props
    const styles = styles_(disabled, secondary)

    return (
        <TouchableOpacity
            style={[
                styles.main,
                props.style,
            ]}
            activeOpacity={0.8}
            onPress={() => onPress()}
            disabled={disabled || isLoading}
        >

            {
                isLoading ?
                    <ActivityIndicator color={COLORS.TEXT} />
                    :
                    <>
                        <If condition={props.icon != undefined && props.icon != true}>
                            <View style={{ marginRight: 8, }}>
                                {props.icon}
                            </View>
                        </If>
                        <AppText semiBold={true} style={[styles.title, props.textStyle]}>{title}</AppText>
                    </>
            }

        </TouchableOpacity>
    )
}

export default React.memo(PrimaryButton)

const styles_ = (disabled: boolean, secondary: boolean) => StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: hp(1),
        backgroundColor: (disabled || secondary) ? COLORS.SECONDARY : COLORS.PRIMARY,
        ...COMMON_STYLES.center_,
        height: hp(5),
        borderRadius: hp(1),
        borderWidth: 1.5,
        borderColor: (disabled || secondary) ? COLORS.SECONDARY : COLORS.PRIMARY
    },
    title: {
        color: COLORS.TEXT,
        fontSize: FONT_SIZE._16,
    }
})