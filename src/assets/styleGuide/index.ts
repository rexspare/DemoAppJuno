import { Dimensions, StyleSheet, Platform, PixelRatio } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'


enum SIZE {
    WIDTH = Dimensions.get('screen').width,
    HEIGHT = Dimensions.get('screen').height,
}

enum COLORS {
    PRIMARY = "#2563EB",
    SECONDARY = "#27272A",
    TERTIARY = "#1E3A8A",
    BACKGROUND = "#09090B",
    TEXT = "#FAFAFA",
    SUBTLE = "#A1A1AA",
    BLACK = "#000000",
    WHITE = "#FFFFFF",
}


const COMMON_STYLES = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND
    },
    mainPad: {
        flex: 1,
        paddingHorizontal: '3%',
        backgroundColor: COLORS.BACKGROUND,
    },
    center_: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scrollPad: {
        paddingHorizontal: '5%'
    }
})

const hp = (val: number) => {
    if (Platform.OS == 'ios') {
        return heightPercentageToDP(val)
    } else {
        return (val / 100) * SIZE.HEIGHT;
    }
}

enum FONT_SIZE {
    _40 = hp(4.93),  // 40 / 812 * 100
    _36 = hp(4.43),
    _32 = hp(3.94),
    _30 = hp(3.70),
    _28 = hp(3.45),
    _26 = hp(3.20),
    _24 = hp(2.96),
    _23 = hp(2.83),
    _22 = hp(2.71),
    _20 = hp(2.46),
    _18 = hp(2.22),
    _17 = hp(2.09),
    _16 = hp(1.97),
    _15 = hp(1.85),
    _14 = hp(1.73),
    _13 = hp(1.60),
    _12 = hp(1.48),
    _11 = hp(1.35),
    _10 = hp(1.23),
    _8 = hp(0.99),
    _6 = hp(0.74),
}

// based on iphone 5s's scale
const scale = SIZE.WIDTH / 320;



export {
    SIZE,
    COLORS,
    COMMON_STYLES,
    hp,
    wp,
    FONT_SIZE
}
