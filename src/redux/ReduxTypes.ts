import { QuotesState } from './reducers/Quotes';

/** Состояние приложения. */
export type RootState = {
    /** Котировки. */
    quotes: QuotesState;
};
