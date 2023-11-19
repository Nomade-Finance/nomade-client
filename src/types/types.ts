export type FormData = {
    acchat: boolean;
    amount: number;
    fromCurrency: string;
    toCurrency: string;
    total: number;
    fees: number;
}

export type ApiData = {
    exchangeRate: number;
    bitcoinRate: number;
    usdcRate: number;
}
