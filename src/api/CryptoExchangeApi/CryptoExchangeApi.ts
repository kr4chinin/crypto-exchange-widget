import type { AxiosInstance } from 'axios';
import axios from 'axios';
import type { CmcCoin } from '~/models/CmcCoin';
import type { ConversionResponse } from '~/models/ConversionResponse';
import { ApiRoutes } from '../ApiRoutes';

class CryptoExchangeApi {
	private readonly _axios: AxiosInstance = axios.create({
		baseURL: import.meta.env.VITE_BASE_API_URL,
	});

	getCoins = async (): Promise<CmcCoin[]> => {
		const response = await this._axios.get(ApiRoutes.COINS);

		return response.data;
	};

	// Get conversion rate and estimated amount between two coins.
	// Example request: {{baseApiUrl}}/api/conversion-rate?from=1&to=1027&fromAmount=3
	// Specify either fromAmount or toAmount, not both.
	getConversion = async ({
		from,
		to,
		fromAmount,
		toAmount,
	}: {
		from: number;
		to: number;
		fromAmount?: number;
		toAmount?: number;
	}): Promise<ConversionResponse> => {
		const response = await this._axios.get(ApiRoutes.CONVERSION, {
			params: {
				from,
				to,
				fromAmount,
				toAmount,
			},
		});

		return response.data;
	};
}

export const cryptoExchangeApi = new CryptoExchangeApi();
