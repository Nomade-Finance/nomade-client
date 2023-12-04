export interface BinanceResponse {
  id: string;
  current_price: number;
  symbol: string;
  price: number;
}

export interface ExchangeRateResponse {
  base_code: string;
  rates: {
      XOF: number;
  };
}

export interface NomadeNumberInputProps {
  value?: number;
  onChange?: (value: number) => void;
  placeholder?: string;
  onInputError?: (error: string | null) => void;
}

export interface CreateUser {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface LogUser {
  email: string;
  password: string;
}