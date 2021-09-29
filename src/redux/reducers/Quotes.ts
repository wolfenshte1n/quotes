import { EQuotesTypes } from '../Types';

/** Модель Action */
interface IAction {
    /** Тип. */
    type: string;
    /** Данные. */
    payload: Quotes[] | boolean;
}

/** Модель котировок. */
export interface Quotes {
    /** Id. */
    id: number;
    /** Last. */
    last: string;
    /** LowestAsk. */
    lowestAsk: string;
    /** HighestBid. */
    highestBid: string;
    /** PercentChange. */
    percentChange: string;
    /** BaseVolume. */
    baseVolume: string;
    /** QuoteVolume. */
    quoteVolume: string;
    /** IsFrozen. */
    isFrozen: string;
    /** PostOnly. */
    postOnly: string;
    /** High24hr. */
    high24hr: string;
    /** Low24hr. */
    low24hr: string;
    /** Error. */
    error: string;
}

const initialState = {
    quotes: {} as Quotes[],
    error: false,
    loading: false,
};

/**
 * Reducer.
 *
 * @param state Начальное состояние.
 * @param action Выполняемое действие.
 */
export const quotes = (state = initialState, action: IAction): State => {
    switch (action.type) {
        case EQuotesTypes.QUOTES_LOADED:
            return {
                ...state,
                quotes: action.payload as Quotes[],
            };
        case EQuotesTypes.QUOTES_ERROR:
            return {
                ...state,
                error: action.payload as boolean,
            };
        case EQuotesTypes.QUOTES_LOADING:
            return state;
        default:
            return state;
    }
};

/** Модель состояния. */
type State = {
    /** Котировки. */
    quotes: Quotes[];
    /** Произошла ли ошибка? */
    error: boolean;
    /** Загружаются ли котировки? */
    loading: boolean;
};

/** Возвращаем состояние как QuotesState. */
export type QuotesState = State;
