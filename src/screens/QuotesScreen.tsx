import { useFocusEffect } from '@react-navigation/core';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../components/Table';
import { fetchQuotes } from '../redux/actions/Quotes';
import { Quotes } from '../redux/reducers/Quotes';
import { RootState } from '../redux/ReduxTypes';

/** Тип для получаемого значения. */
export type ParsedData = {
    /** Имя. */
    name: string;
    /** Является ли элемент последним. */
    last: string;
    /** Самая высокая ставка. */
    highestBid: string;
    /** Изменение процента. */
    percentChange: string;
};

/** Экран котировок. */
const QuotesScreen = (): JSX.Element => {
    const quotes: Quotes[] = useSelector((state: RootState) => state.quotes.quotes);
    const error: boolean = useSelector((state: RootState) => state.quotes.error);
    const dispatch = useDispatch();

    useFocusEffect(() => {
        const interval = setInterval(() => {
            dispatch(fetchQuotes());
        }, 5000);

        return (): void => {
            clearInterval(interval);
        };
    });

    /** Разбираем полученные данные на нужные элементы. */
    const parseData = (): ParsedData[] => {
        const newData: ParsedData[] = [];

        Object.values(quotes).forEach((el: Quotes, index: number) => {
            newData.push({
                name: Object.keys(quotes)[index],
                last: el.last,
                highestBid: el.highestBid,
                percentChange: el.percentChange,
            });
        });

        return newData;
    };

    if (Object.keys(quotes).length === 0) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0099cc" />
            </View>
        );
    }

    return (
        <View style={styles.content}>
            {error && (
                <View style={styles.errorWrapper}>
                    <Text style={styles.errorText}>Ошибка</Text>
                </View>
            )}
            {!error && <Table data={parseData()} />}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        marginTop: 15,
        marginBottom: 15,
        paddingHorizontal: 15,
        height: '100%',
        width: '100%',
        paddingBottom: 20,
    },
    errorWrapper: {
        width: '100%',
        height: 50,
        backgroundColor: '#F08080',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    loader: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default QuotesScreen;
