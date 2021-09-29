import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import QuotesScreen from '../screens/QuotesScreen';

/** Экраны навигации. */
export enum ENavigationScreens {
    /** Домашний экран. */
    HOME = 'HOME',
    /** Экран котировок. */
    QUOTES = 'QUOTES',
}

const TabNavigator = createBottomTabNavigator();

/** Основная навигация. */
const MyScreenNavigation = (): JSX.Element => (
    <TabNavigator.Navigator>
        <TabNavigator.Screen
            name={ENavigationScreens.HOME}
            component={HomeScreen}
            options={{
                title: 'Главная',
                /** Отрисовка иконки нижнего таба. */
                tabBarIcon: (): JSX.Element => (
                    <Image style={styles.image} source={require('../assets/img/main.png')} />
                ),
            }}
        />
        <TabNavigator.Screen
            name={ENavigationScreens.QUOTES}
            component={QuotesScreen}
            options={{
                title: 'Котировки',
                /** Отрисовка иконки нижнего таба. */
                tabBarIcon: (): JSX.Element => (
                    <Image style={styles.image} source={require('../assets/img/analytics.png')} />
                ),
            }}
        />
    </TabNavigator.Navigator>
);

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
    },
});

/** Возвращаем контейнер с основной навигацией. */
export default function AppNavigation(): JSX.Element {
    return (
        <NavigationContainer>
            <MyScreenNavigation />
        </NavigationContainer>
    );
}
