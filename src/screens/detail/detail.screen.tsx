import React, { FC, useRef, useState } from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SIZE } from '../../assets/styleGuide';
import { AppHeader, Layout } from '../../components';
import { ProductItem } from '../../models';
import styles from './detail.styles';


const Slide: FC<{ item: string }> = ({ item }) => {

    return (
        <View style={styles.item}>
            <ImageBackground
                source={{ uri: item }}
                style={styles.slideImg}
            >

            </ImageBackground>
        </View>
    );
};

const DetailScreen: FC = () => {
    const selectedItem = useSelector((state: any) => state.items.selectedItem) as ProductItem;
    const ref = useRef<FlatList>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const updateCurrentSlideIndex = (e: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / SIZE.WIDTH);
        setCurrentSlideIndex(currentIndex);
    };



    return (
        <Layout fixed={true}>

            <AppHeader
                title={selectedItem.title}
                showBackIcon={true}
            />

            <FlatList
                ref={ref}
                onScroll={updateCurrentSlideIndex}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={selectedItem.images}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />

        </Layout>
    )
}

export default DetailScreen
