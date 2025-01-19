import { Text } from '@mantine/core';
import { ConnectionLine } from '~/components/ConnectionLine';
import { CryptoInput } from '~/components/CryptoInput';
import { ExchangeButton } from '~/components/ExchangeButton';
import { ReverseButton } from '~/components/ReverseButton';
import {
	BottomBlockWrapper,
	ExchangeBlock,
	Label,
	ReverseButtonWrapper,
	Root,
} from './CryptoExchange.styles';

const CryptoExchange = () => {
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

					<ExchangeButton onClick={() => console.log('🚀 Exchange!')} />
				</BottomBlockWrapper>
			</ExchangeBlock>
		</Root>
	);
};

export { CryptoExchange };
