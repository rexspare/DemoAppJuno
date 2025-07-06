import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StoreItem } from '../src/components';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { NavigationContainer } from '@react-navigation/native';
import { ProductItem } from '../src/models';
import { ROUTES } from '../src/navigation/routes';

const mockStore = configureStore([]);
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('StoreItem Component', () => {
  const item: ProductItem = {
    id: 1,
    title: 'Test Product',
    slug: 'test-product',
    price: 100,
    description: 'Test Description',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://test.com/image.jpg',
      creationAt: '',
      updatedAt: '',
    },
    images: ['https://test.com/image.jpg'],
    creationAt: '',
    updatedAt: '',
  };

  it('renders item details correctly', () => {
    const store = mockStore({});
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <StoreItem item={item} />
        </NavigationContainer>
      </Provider>
    );

    expect(getByText('$100')).toBeTruthy();
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('Clothes')).toBeTruthy();
  });

  it('dispatches action and navigates on press', () => {
    const store = mockStore({});
    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <StoreItem item={item} />
        </NavigationContainer>
      </Provider>
    );

    const touchable = getByTestId('store-item-touchable');
    fireEvent.press(touchable);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.DETAIL);
  });
});
