import { Loader, Text } from '@mantine/core';
import styled from 'styled-components';
import { useGetCoins } from './api/CryptoExchangeApi/queries/useGetCoins';
import { Overlay } from './components/Overlay';
import { useLimitMaxToasts } from './hooks/useLimitMaxToasts';
import { CryptoExchange } from './widgets/CryptoExchange/CryptoExchange';

const Root = styled.div`
	position: relative;

	height: 100dvh;
	width: 100dvw;

	display: flex;
	align-items: center;
	justify-content: center;

	padding-bottom: 80px;
`;

const App = () => {
	const { data: coins, isLoading: areCoinsLoading, isError: isCoinsError } = useGetCoins();

	useLimitMaxToasts();

	return (
		<Root>
			<Overlay />

			{areCoinsLoading ? (
				<Loader size="xl" color="var(--color-gray-100)" type="dots" />
			) : coins ? (
				<CryptoExchange coins={coins} />
			) : (
				isCoinsError && <Text size="xl">💀 Something went wrong while fetching coins!</Text>
			)}
		</Root>
	);
};

export { App };
