import { makeAutoObservable } from 'mobx';
import type { CmcCoin } from '~/models/CmcCoin';

export class CryptoExchangeStore {
	coins: CmcCoin[] = [];

	fromCoin: CmcCoin | null = null;
	fromAmount: number = 0;

	toCoin: CmcCoin | null = null;
	toAmount: number = 0;

	constructor(coins: CmcCoin[]) {
		this.coins = coins;

		this.fromCoin = this.coins[0] ?? null;
		this.toCoin = this.coins[1] ?? null;

		makeAutoObservable(this);
	}

	setFromAmount = (amount: number): void => {
		this.fromAmount = amount;
	};

	setToAmount = (amount: number): void => {
		this.toAmount = amount;
	};

	setToCoin = (coin: CmcCoin): void => {
		this.toCoin = coin;
	};

	setFromCoin = (coin: CmcCoin): void => {
		this.fromCoin = coin;
	};

	reverse = (): void => {
		[this.fromCoin, this.toCoin, this.fromAmount, this.toAmount] = [
			this.toCoin,
			this.fromCoin,
			this.toAmount,
			this.fromAmount,
		];
	};

	getExchangeRate = (): string => {
		// TODO: normal exchange rate
		return '...';
	};

	exchange = (): void => {
		console.log('🚀 Exchange!');
	};
}
