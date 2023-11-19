export interface CryptoData {
    id: string;
    name: string;
    current_price: number;
    price_change: number;
}

export interface ExchangeRateData {
    rates: {
        XOF: number;
    };
}
