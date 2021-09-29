import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ParsedData } from '../screens/QuotesScreen';

/** Модель props компонента. */
interface IRowProps {
    /** Элемент. */
    element: ParsedData;
    /** Дополнительные стили. */
    rowStyles?: StyleProp<ViewStyle>;
    /** Будут ли в данной строке цифры? */
    isHaveNumbers?: boolean;
}

/**
 * Строка с 1 ячейкой.
 *
 * @param props Свойства компонента.
 */
const Row: FC<IRowProps> = (props) => {
    const { element, rowStyles, isHaveNumbers = false } = props;

    return (
        <View>
            <View style={[styles.rowElement, rowStyles]}>
                <Text style={styles.text}>{element.name}</Text>
                <Text style={styles.text}>{isHaveNumbers ? parseFloat(element.last).toFixed(3) : element.last}</Text>
                <Text style={styles.text}>
                    {isHaveNumbers ? parseFloat(element.highestBid).toFixed(3) : element.highestBid}
                </Text>
                <Text style={styles.text}>
                    {isHaveNumbers ? parseFloat(element.percentChange).toFixed(3) : element.percentChange}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rowElement: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    text: {
        flex: 1,
        textAlign: 'center',
    },
});

export default Row;
