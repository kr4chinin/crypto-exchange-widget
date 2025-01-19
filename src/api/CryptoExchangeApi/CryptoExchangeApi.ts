import type { AxiosInstance } from 'axios';
import axios from 'axios';
import type { CmcCoin } from '~/models/CmcCoin';
import { ApiRoutes } from '../ApiRoutes';

class CryptoExchangeApi {
	private readonly _axios: AxiosInstance = axios.create({
		baseURL: import.meta.env.VITE_BASE_API_URL,
	});

	getCoins = async (): Promise<CmcCoin[]> => {
		const response = await this._axios.get(ApiRoutes.COINS);

		return response.data;
	};
}

export const cryptoExchangeApi = new CryptoExchangeApi();
