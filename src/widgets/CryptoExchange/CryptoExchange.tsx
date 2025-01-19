import { Text } from '@mantine/core';
import { useMemo } from 'react';
import { ConnectionLine } from '~/components/ConnectionLine';
import { CryptoInput } from '~/components/CryptoInput';
import { ExchangeButton } from '~/components/ExchangeButton';
import { ReverseButton } from '~/components/ReverseButton';
import { CryptoExchangeStore } from '~/store/CryptoExchangeStore';
import {
	BottomBlockWrapper,
	ExchangeBlock,
	Label,
	ReverseButtonWrapper,
	Root,
} from './CryptoExchange.styles';

const CryptoExchange = () => {
	const cryptoExchangeStore = useMemo(() => new CryptoExchangeStore(), []);

	console.log({
		sendCryptoObj: cryptoExchangeStore.sendCryptoObj.amount,
		getCryptoObj: cryptoExchangeStore.getCryptoObj.amount,
	});

	return (
		<Root>
			<Label>Crypto Exchange Widget</Label>

			<ExchangeBlock>
				<CryptoInput label="You Send" />

				<ConnectionLine $left="30%" />
				<ConnectionLine $left="35%" />

				<ReverseButtonWrapper>
					<ReverseButton />
				</ReverseButtonWrapper>

				<CryptoInput label="You Get" />

				<BottomBlockWrapper>
					<Text size="sm">📈 1 BTC = 0.001 ETH</Text>

					<ExchangeButton onClick={cryptoExchangeStore.exchange} />
				</BottomBlockWrapper>
			</ExchangeBlock>
		</Root>
	);
};

export { CryptoExchange };
