import React, { FC } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ParsedData } from '../screens/QuotesScreen';
import Row from './Row';

/** Модель props компонента. */
interface ITable {
    /** Данные для таблицы. */
    data: ParsedData[];
}

/**
 * Таблица с данными.
 *
 * @param props Свойства компонента.
 */
const Table: FC<ITable> = (props) => {
    const { data } = props;

    const guideElement: ParsedData = {
        name: 'Name',
        last: 'Last',
        highestBid: 'Highest bid',
        percentChange: 'Percent change',
    };

    /**
     * Отрисовка элемента.
     *
     * @param item Элемент списка.
     */
    const renderItem = (item): JSX.Element => <Row key={item.name} element={item} isHaveNumbers />;

    return (
        <View style={styles.table}>
            <Row element={guideElement} isHaveNumbers={false} />
            <FlatList
                data={data}
                initialNumToRender={15}
                keyExtractor={(item): string => item.name}
                renderItem={({ item }): JSX.Element => renderItem(item)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    table: {
        flex: 1,
    },
});

export default Table;
