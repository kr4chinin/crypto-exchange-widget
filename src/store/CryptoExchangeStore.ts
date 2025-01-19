import { makeAutoObservable } from 'mobx';
import type { CmcCoin } from '~/models/CmcCoin';

export class CryptoExchangeStore {
	coins: CmcCoin[] = [];

	fromCoin: CmcCoin | null = this.coins[0] ?? null;
	fromAmount: number = 0;

	toCoin: CmcCoin | null = this.coins[1] ?? null;
	toAmount: number = 0;

	constructor(coins: CmcCoin[]) {
		this.coins = coins;

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
		[this.fromCoin, this.toCoin] = [this.toCoin, this.fromCoin];
	};

	getExchangeRate = (): string => {
		// TODO: normal exchange rate
		return '...';
	};

	exchange = (): void => {
		console.log('🚀 Exchange!');
	};
}
