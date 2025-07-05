import React, { FC, useEffect } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, setSelectedItem } from '../../redux/itemsSlice'
import { COLORS } from '../../assets/styleGuide';
import styles from './home.styles';
import { AppHeader, Layout, StoreItem } from '../../components';

const HomeScreen: FC = () => {
    const dispatch = useDispatch();
    const { items, loading } = useSelector((state: any) => state.items);

    useEffect(() => {
        dispatch(fetchItems() as any);
    }, []);


    return (
        <Layout fixed={true}>

            <AppHeader
                title='Home'
            />

            {
                loading ?
                    <ActivityIndicator color={COLORS.WHITE} size="large" style={styles.loader} />
                    :
                    <Layout fixed={true} containerStyle={styles.main}>
                        <FlatList
                            data={items}
                            numColumns={2}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.listContainer}
                            columnWrapperStyle={styles.columnWrapper}
                            renderItem={({ item }) => (<StoreItem item={item} />)}
                        />
                    </Layout>
            }

        </Layout>
    )
}

export default HomeScreen
