import { BottomTabNavigationHelpers } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ENavigationScreens } from '../navigation/AppNavigation';

/** Модель props комопнента. */
interface IHomeScreenProps {
    /** Навигация. */
    navigation: BottomTabNavigationHelpers;
}

/**
 * Домашний экран.
 *
 * @param props Свойства компонента.
 */
const HomeScreen: FC<IHomeScreenProps> = (props) => {
    const { navigation } = props;

    /** Обработчик нажатия на "котировки". */
    const handleNavigateToQuotes = (): void => {
        navigation.navigate(ENavigationScreens.QUOTES);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleNavigateToQuotes}>
                <Text style={styles.title}>Котировки</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#5c6bc0',
        borderRadius: 50,
    },
    title: {
        fontSize: 15,
        lineHeight: 15,
        textAlign: 'center',
        color: 'white',
    },
});

export default HomeScreen;
