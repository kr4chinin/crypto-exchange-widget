import { Button, Text } from '@mantine/core';
import styled from 'styled-components';
import { ConnectionLine } from '~/components/ConnectionLine';
import { CryptoInput } from '~/components/CryptoInput';
import { ReverseButton } from '~/components/ReverseButton';

const Root = styled.div`
	position: relative;

	z-index: var(--crypto-exchange-widget-z-index);

	width: 450px;
	height: 310px;

	display: flex;
	flex-direction: column;

	padding: 16px 24px;
	border-radius: 16px;
	border: 1px solid var(--color-neutral-950);
	backdrop-filter: blur(8px);
	box-shadow:
		0 4px 12px rgba(255, 255, 255, 0.05),
		0 6px 16px -4px rgba(255, 255, 255, 0.06),
		inset 0 0 0 1px rgba(255, 255, 255, 0.085);
	background: color-mix(in srgb, var(--color-neutral-800) 85%, transparent);
`;

const ReverseButtonWrapper = styled.div`
	margin: 16px 0 0 auto;
`;

const BottomBlockWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-top: 32px;
`;

const CryptoExchange = () => {
	return (
		<Root>
			<CryptoInput label="You Send" />

			<ConnectionLine $left="30%" />
			<ConnectionLine $left="35%" />

			<ReverseButtonWrapper>
				<ReverseButton />
			</ReverseButtonWrapper>

			<CryptoInput label="You Get" />

			<BottomBlockWrapper>
				<Text>1 BTC = 0.001 ETH</Text>

				<Button variant="gradient" w="fit-content">
					Exchange
				</Button>
			</BottomBlockWrapper>
		</Root>
	);
};

export { CryptoExchange };
