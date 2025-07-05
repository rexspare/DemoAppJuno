import { StyleSheet } from "react-native";
import { hp, wp } from "../../assets/styleGuide";

const styles = StyleSheet.create({
    item: {
        width: wp(100),
        height: wp(70),
        maxHeight: hp(50),
        alignItems: 'center',
        borderWidth:2,
        borderColor:"#FFFFFF"
    },
    slideImg:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    }
})

export default styles