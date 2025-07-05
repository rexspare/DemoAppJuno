import { StyleSheet } from "react-native";
import { COLORS, COMMON_STYLES, hp } from "../../assets/styleGuide";

const styles = StyleSheet.create({
    loader: {
        ...COMMON_STYLES.main
    },
    main: {
        paddingHorizontal: '5%'
    },
    listContainer: {
        paddingTop: hp(2)
    },
    columnWrapper: {
        justifyContent: "space-between",
    },
})

export default styles