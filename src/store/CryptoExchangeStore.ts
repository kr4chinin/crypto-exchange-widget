import { makeAutoObservable } from 'mobx';

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
	sendCryptoObj: Cryptocurrency = bitcoinMock;
	getCryptoObj: Cryptocurrency = ethereumMock;

	constructor() {
		makeAutoObservable(this);
	}

	setSendCryptoAmount = (amount: number): void => {
		this.sendCryptoObj.amount = amount;

		// TODO: normal conversion
		this.getCryptoObj.amount = this.sendCryptoObj.amount;
	};

	setGetCryptoAmount = (amount: number): void => {
		this.getCryptoObj.amount = amount;

		// TODO: normal conversion
		this.sendCryptoObj.amount = this.getCryptoObj.amount;
	};

	reverse = (): void => {
		[this.sendCryptoObj, this.getCryptoObj] = [this.getCryptoObj, this.sendCryptoObj];
	};

	getExchangeRate = (): string => {
		// TODO: normal exchange rate
		return '...';
	};

	exchange = (): void => {
		console.log('🚀 Exchange!');
	};
}
