import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, hp, wp } from "../../assets/styleGuide";

const styles = StyleSheet.create({
    context: {
        paddingHorizontal: '5%',
        paddingVertical: hp(2)
    },
    title: {
        fontSize: FONT_SIZE._18,
        marginBottom: 10
    },
    price: {
        fontSize: FONT_SIZE._18,
        fontWeight: "600",
        marginBottom: 10
    },
    category: {
        color: COLORS.PRIMARY,
        marginBottom: 10
    },
    description: {
        lineHeight: FONT_SIZE._18
    }
})

export default styles