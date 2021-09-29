import { Quotes } from '../reducers/Quotes';

/** Запрос котировок с сервера. */
export const getQuotes = (): Promise<Quotes[]> =>
    fetch('https://poloniex.com/public?command=returnTicker')
        .then((response) => response.json())
        .then((data) => data);
