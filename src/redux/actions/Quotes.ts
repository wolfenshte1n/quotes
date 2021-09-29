import { Dispatch } from 'redux';
import { Quotes } from '../reducers/Quotes';
import { getQuotes } from '../services/QuotesServices';
import { EQuotesTypes } from '../Types';

/** Возвращаемый объект из action. */
interface IActionData {
    /** Тип. */
    type: EQuotesTypes;
    /** Данные. */
    payload: Quotes[] | boolean;
}

/** Запрос котировок. */
export const fetchQuotes =
    () =>
    (dispatch: Dispatch): void => {
        getQuotes()
            .then((res) => {
                dispatch(quotesError(false));
                dispatch(quotesLoaded(res));
            })
            .catch(() => {
                dispatch(quotesError(true));
            });
    };

/**
 * Котировки были загружены.
 *
 * @param data Загруженные котировки.
 */
export const quotesLoaded = (data: Quotes[]): IActionData => ({
    type: EQuotesTypes.QUOTES_LOADED,
    payload: data,
});

/**
 * Ошибка при загрузке котировок.
 *
 * @param error Была ли ошибка?
 */
export const quotesError = (error: boolean): IActionData => ({
    type: EQuotesTypes.QUOTES_ERROR,
    payload: error,
});
