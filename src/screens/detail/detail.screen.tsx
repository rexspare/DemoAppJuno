import React, { FC, useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, ImageBackground, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, setSelectedItem } from '../../redux/itemsSlice'
import { COLORS, hp, SIZE } from '../../assets/styleGuide';
import { AppHeader, AppText, ImageSlideItem, Layout, StoreItem } from '../../components';
import { ProductItem } from '../../models';
import styles from './detail.styles';



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

            <Layout>
                <FlatList
                    ref={ref}
                    onScroll={updateCurrentSlideIndex}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={selectedItem.images}
                    pagingEnabled
                    renderItem={({ item }) => <ImageSlideItem item={item} totalSlides={selectedItem.images.length} currentSlide={currentSlideIndex} />}
                />

                <Layout fixed={true} containerStyle={styles.context}>
                    <AppText style={styles.title}>{selectedItem.title}</AppText>
                    <AppText style={styles.price}>${selectedItem.price}</AppText>
                    <AppText style={styles.category}>Category: {selectedItem.category.name}</AppText>
                    <AppText style={styles.description}>{selectedItem.description}</AppText>

                </Layout>

            </Layout>

        </Layout>
    )
}

export default DetailScreen
