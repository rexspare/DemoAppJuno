import React, { ReactNode, useState } from 'react';
import { StyleSheet, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { AppText } from '.';
import { COLORS, COMMON_STYLES, FONT_SIZE, hp } from '../assets/styleGuide';
import If from './if';

interface primaryInputPros {
    title?: string | ReactNode;
    onChange?: (txt: any) => any;
    isPassword?: Boolean;
    containerStyles?: ViewStyle;
    inputStyles?: any;
    inputContainer?: ViewStyle;
    value?: any;
    keyBoardType?: any;
    titleStyles?: TextStyle;
    editable?: boolean;
    hideTitle?: boolean;
    iconName?: string;
    multiline?: boolean;
    renderRightIcon?: any;
    renderLeftIcon?: any;
    placeholder?: string;
    inputRef?: any;
    maxLength?: number;
    onFocus?: () => {};
    onPressRightIcon?: () => void;
    showPasswordStrenght?: boolean;
}

const PrimaryInput: React.FC<primaryInputPros> = (props) => {
    const {
        onPressRightIcon = () => { },
        title = 'title',
        onChange = () => { },
        isPassword = false,
        value = 'value',
        keyBoardType = 'default',
        editable = true,
        titleStyles = {},
        placeholder,
        multiline = false
    } = props
    const [isSecureTextEntry, setisSecureTextEntry] = useState<boolean>(true)


    return (
        <View style={[styles.main, props.containerStyles]}>
            <If condition={props.hideTitle != true}>
                <View style={styles.titleContainer}>
                    <AppText style={{
                        ...styles.title,
                        ...{ marginTop: props.showPasswordStrenght == true ? 0 : hp(1) },
                        ...titleStyles
                    }}>{title}</AppText>

                </View>
            </If>
            {/* TEXT INPUT */}
            <View style={[styles.container,
            {
                paddingLeft: props?.renderLeftIcon ? 10 : 0
            },
            props.inputContainer
            ]}>

                <If condition={props.renderLeftIcon != undefined}>
                    {props?.renderLeftIcon}
                </If>

                <TextInput
                    ref={props.inputRef}
                    style={[
                        styles.input,
                        props.inputStyles,
                        multiline == true ? { textAlignVertical: 'top' } : {}
                    ]}
                    value={value || ""}
                    secureTextEntry={props?.renderRightIcon ? false : props?.iconName ? false : isPassword == true ? isSecureTextEntry : false}
                    onChangeText={(txt) => onChange(txt)}
                    onEndEditing={(e) => console.log(e.nativeEvent.text)}
                    keyboardType={keyBoardType}
                    editable={editable}
                    placeholder={placeholder || ""}
                    placeholderTextColor={COLORS.WHITE}
                    multiline={multiline == true ? true : false}
                    {...props}
                />

                <If condition={isPassword == true}>
                    <TouchableOpacity
                        style={styles.eyeBtn}
                        activeOpacity={0.8}
                        onPress={() => props?.renderRightIcon ? onPressRightIcon() : setisSecureTextEntry(!isSecureTextEntry)}
                    >
                        {
                            props?.renderRightIcon ?
                                props?.renderRightIcon :
                                <Feather
                                    name={props?.iconName ? props?.iconName : isSecureTextEntry ? 'eye' : 'eye-off'}
                                    color={COLORS.WHITE}
                                    size={hp(2)} />

                        }
                    </TouchableOpacity>

                </If>

            </View>
        </View>
    )
}

export default React.memo(PrimaryInput)

const styles = StyleSheet.create({
    main: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: hp(0.5),
        backgroundColor: COLORS.BACKGROUND,
    },
    title: {
        marginBottom: 5,
        textAlign: 'left',
        fontSize: FONT_SIZE._14
    },
    container: {
        flexDirection: 'row',
        borderRadius: hp(0.9),
        alignItems: 'center',
        backgroundColor: COLORS.SUBTLE,
        borderWidth: 1,
        borderColor: COLORS.SECONDARY,
    },
    input: {
        flex: 1,
        height: hp(5),
        paddingHorizontal: 10,
        fontSize: FONT_SIZE._14,
        color: COLORS.WHITE
    },
    eyeBtn: {
        ...COMMON_STYLES.center_,
        paddingHorizontal: 10
    },
    titleContainer: {
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    strengthContainer: {
        flexDirection: 'row',
    },
    strength: {
        width: 25,
        height: 4,
        marginLeft: 4,
        borderRadius: 10,
    }
})