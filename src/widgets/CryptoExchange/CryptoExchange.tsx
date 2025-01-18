import { Button, Text } from '@mantine/core';
import { ConnectionLine } from '~/components/ConnectionLine';
import { CryptoInput } from '~/components/CryptoInput';
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
					<Text>1 BTC = 0.001 ETH</Text>

					<Button
						w="fit-content"
						variant="gradient"
						gradient={{ from: 'gray', to: 'cyan', deg: 156 }}
					>
						Exchange
					</Button>
				</BottomBlockWrapper>
			</ExchangeBlock>
		</Root>
	);
};

export { CryptoExchange };
