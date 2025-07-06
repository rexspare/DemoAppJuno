import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { COLORS, hp, wp } from '../../assets/styleGuide';
import { ProductItem } from '../../models';
import { setSelectedItem } from '../../redux/itemsSlice';
import AppText from '../appText';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { InitialNavigationStackParamList } from '../../navigation/root';
import { ROUTES } from '../../navigation/routes';

interface storeItemProps {
    item: ProductItem;
}

const StoreItem: FC<storeItemProps> = (props) => {
    const navigation = useNavigation<NavigationProp<InitialNavigationStackParamList>>();
    const dispatch = useDispatch();
    const { item } = props

    return (
        <TouchableOpacity
            testID="store-item-touchable"
            activeOpacity={0.8}
            onPress={() => {
                dispatch(setSelectedItem(item));
                navigation.navigate(ROUTES.DETAIL)
            }}
            style={styles.main}>

            <Image
                source={{ uri: item.images[0] }}
                style={styles.img}
            />

            <View style={styles.context}>
                <AppText style={styles.price}>${item.price}</AppText>
                <AppText style={styles.title} numberOfLines={1}>{item.title}</AppText>
                <AppText style={styles.category} numberOfLines={1}>{item.category.name}</AppText>
            </View>

        </TouchableOpacity>
    )
}

export default StoreItem

const styles = StyleSheet.create({
    main: {
        width: wp(43),
        maxWidth: 400,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.WHITE,
        overflow: 'hidden',
        alignSelf: 'center',
        marginVertical: hp(1),
        backgroundColor: COLORS.WHITE,
    },
    img: {
        width: '100%',
        height: hp(20),
    },
    context: {
        paddingHorizontal: '5%',
        paddingVertical: 5
    },
    price: {
        color: COLORS.BLACK,
        fontWeight: '700'
    },
    title: {
        color: COLORS.BLACK,
    },
    category: {
        color: COLORS.PRIMARY,
        fontWeight: '500'

    }
})