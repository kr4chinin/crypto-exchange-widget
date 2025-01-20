import { Text } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { ConnectionLine } from '~/components/ConnectionLine';
import { CryptoInput } from '~/components/CryptoInput';
import { ExchangeButton } from '~/components/ExchangeButton';
import { ReverseButton } from '~/components/ReverseButton';
import type { CmcCoin } from '~/models/CmcCoin';
import { CryptoExchangeStore } from '~/store/CryptoExchangeStore';
import {
	BottomBlockWrapper,
	ExchangeBlock,
	Label,
	ReverseButtonWrapper,
	Root,
} from './CryptoExchange.styles';

interface Props {
	coins: CmcCoin[];
}

const CryptoExchange = observer((props: Props) => {
	const { coins } = props;

	const cryptoExchangeStore = useMemo(() => new CryptoExchangeStore(coins), [coins]);

	const {
		fromCoin,
		fromAmount,
		toCoin,
		toAmount,
		setFromCoin,
		setFromAmount,
		setToCoin,
		setToAmount,
		reverse,
		exchange,
		isLoading,
		conversion,
		error,
	} = cryptoExchangeStore;

	return (
		<Root>
			<Label>Crypto Exchange Widget</Label>

			<ExchangeBlock>
				<CryptoInput
					coins={coins}
					coin={fromCoin}
					label="You Send"
					amount={fromAmount}
					setCoin={setFromCoin}
					setAmount={setFromAmount}
				/>

				<ConnectionLine $left="30%" />
				<ConnectionLine $left="35%" />

				<ReverseButtonWrapper>
					<ReverseButton onClick={reverse} />
				</ReverseButtonWrapper>

				<CryptoInput
					coins={coins}
					coin={toCoin}
					label="You Get"
					amount={toAmount}
					setCoin={setToCoin}
					setAmount={setToAmount}
				/>

				<BottomBlockWrapper>
					{isLoading && <Text size="sm">Loading...</Text>}

					{error && (
						<Text size="sm" c="red">
							{error}
						</Text>
					)}

					{!isLoading && !error && conversion && (
						<Text size="sm">
							📈 1 {fromCoin?.symbol} = {conversion.rate.toFixed(6)} {toCoin?.symbol}
						</Text>
					)}

					<ExchangeButton onClick={exchange} disabled={isLoading || !!error || !conversion} />
				</BottomBlockWrapper>
			</ExchangeBlock>
		</Root>
	);
});

CryptoExchange.displayName = 'CryptoExchange';
export { CryptoExchange };
