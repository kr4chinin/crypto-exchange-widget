import { debounce } from 'lodash';
import { makeAutoObservable, runInAction } from 'mobx';
import { cryptoExchangeApi } from '~/api/CryptoExchangeApi/CryptoExchangeApi';
import type { CmcCoin } from '~/models/CmcCoin';
import type { ConversionResponse } from '~/models/ConversionResponse';
import type { ConversionDirection } from '~/types/ConversionDirection';

const CONVERSION_DEBOUNCE_MS = 250;

export class CryptoExchangeStore {
	coins: CmcCoin[] = [];

	fromCoin: CmcCoin | null = null;
	fromAmount: number = 0;

	toCoin: CmcCoin | null = null;
	toAmount: number = 0;

	conversion: ConversionResponse | null = null;
	isLoading = false;
	error: string | null = null;

	constructor(coins: CmcCoin[]) {
		this.coins = coins;

		this.fromCoin = this.coins[0] ?? null;
		this.toCoin = this.coins[1] ?? null;

		makeAutoObservable(this);
	}

	setFromAmount = (amount: number): void => {
		this.fromAmount = amount;

		this._debouncedGetConversion('from');
	};

	setToAmount = (amount: number): void => {
		this.toAmount = amount;

		this._debouncedGetConversion('to');
	};

	setFromCoin = (coin: CmcCoin): void => {
		this.fromCoin = coin;

		if (this.fromAmount > 0) this._debouncedGetConversion('from');
	};

	setToCoin = (coin: CmcCoin): void => {
		this.toCoin = coin;

		if (this.fromAmount > 0) this._debouncedGetConversion('from');
	};

	reverse = (): void => {
		[this.fromCoin, this.toCoin] = [this.toCoin, this.fromCoin];
		[this.fromAmount, this.toAmount] = [this.toAmount, this.fromAmount];

		if (this.fromAmount > 0) this._debouncedGetConversion('from');
	};

	private _debouncedGetConversion = debounce((direction: ConversionDirection) => {
		this._getConversion(direction);
	}, CONVERSION_DEBOUNCE_MS);

	private _getConversion = async (direction: ConversionDirection): Promise<void> => {
		if (
			!this.fromCoin ||
			!this.toCoin ||
			(direction === 'from' ? this.fromAmount <= 0 : this.toAmount <= 0)
		)
			return;

		try {
			this.isLoading = true;
			this.error = null;

			const response = await cryptoExchangeApi.getConversion({
				from: direction === 'from' ? this.fromCoin.id : this.toCoin.id,
				to: direction === 'from' ? this.toCoin.id : this.fromCoin.id,
				[direction === 'from' ? 'fromAmount' : 'toAmount']:
					direction === 'from' ? this.fromAmount : this.toAmount,
			});

			runInAction(() => {
				this.conversion = response;

				if (direction === 'from') {
					this.toAmount = response.estimatedAmount;
				} else {
					this.fromAmount = response.estimatedAmount;
				}
			});
		} catch (error) {
			runInAction(() => {
				this.error = '🚨 Error fetching conversion rate!';
			});
		} finally {
			runInAction(() => {
				this.isLoading = false;
			});
		}
	};

	exchange = (): void => {
		if (this.fromAmount && this.toAmount && this.fromCoin && this.toCoin) {
			console.log(
				`🚀 Exchange $${this.fromCoin?.symbol} (${this.fromAmount}) to $${this.toCoin?.symbol} (${this.toAmount})`
			);
		} else {
			console.error('❌ Failed to exchange! Not all necessary data is provided.');
		}
	};
}
