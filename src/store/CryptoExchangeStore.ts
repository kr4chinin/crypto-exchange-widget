import { makeAutoObservable } from 'mobx';
import type { CmcCoin } from '~/models/CmcCoin';

interface Cryptocurrency {
	name: string;
	ticker: string;
	amount: number;
}

const bitcoinMock: Cryptocurrency = {
	name: 'Bitcoin',
	ticker: 'BTC',
	amount: 0,
};

const ethereumMock: Cryptocurrency = {
	name: 'Ethereum',
	ticker: 'ETH',
	amount: 0,
};

export class CryptoExchangeStore {
	coins: CmcCoin[] = [];

	from: Cryptocurrency = bitcoinMock;
	to: Cryptocurrency = ethereumMock;

	constructor(coins: CmcCoin[]) {
		this.coins = coins;

		makeAutoObservable(this);
	}

	setSendCryptoAmount = (amount: number): void => {
		this.from.amount = amount;

		// TODO: normal conversion
		this.to.amount = this.from.amount;
	};

	setGetCryptoAmount = (amount: number): void => {
		this.to.amount = amount;

		// TODO: normal conversion
		this.from.amount = this.to.amount;
	};

	reverse = (): void => {
		[this.from, this.to] = [this.to, this.from];
	};

	getExchangeRate = (): string => {
		// TODO: normal exchange rate
		return '...';
	};

	exchange = (): void => {
		console.log('🚀 Exchange!');
	};
}
