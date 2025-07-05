import { StyleSheet } from "react-native";
import { hp } from "../../assets/styleGuide";

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: '5%'
    },
    img: {
        width: hp(10),
        height: hp(20),
        resizeMode: "contain",
        alignSelf: 'center',
        marginVertical: hp(3)
    },
    btn: {
        marginTop: hp(3)
    }
})

export default styles