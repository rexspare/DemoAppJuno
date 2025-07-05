import React, { FC } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { COLORS, hp, wp } from '../../assets/styleGuide';
import { AppText } from '../../components';

interface imageSlideItemProps {
    item: string;
    totalSlides: number;
    currentSlide: number;
}


const ImageSlideItem: FC<imageSlideItemProps> = (props) => {
    const { item, totalSlides, currentSlide } = props

    return (
        <View style={styles.item}>
            <ImageBackground
                source={{ uri: item }}
                style={styles.slideImg}
            >
                <AppText style={styles.pagination}>{currentSlide + 1}/{totalSlides}</AppText>
            </ImageBackground>
        </View>
    );
};

export default ImageSlideItem


const styles = StyleSheet.create({
    item: {
        width: wp(100),
        height: wp(70),
        maxHeight: hp(50),
        alignItems: 'center',
    },
    slideImg: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    pagination: {
        backgroundColor: COLORS.PRIMARY,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10
    }
})

