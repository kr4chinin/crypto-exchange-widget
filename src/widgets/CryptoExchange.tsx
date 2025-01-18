import styled from 'styled-components';
import { CryptoInput } from '~/components/CryptoInput';
import { ReverseButton } from '~/components/ReverseButton';

const Root = styled.div`
	position: relative;

	z-index: var(--crypto-exchange-widget-z-index);

	width: 450px;
	height: 350px;

	display: flex;
	flex-direction: column;
	gap: 16px;

	padding: 16px;
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
	margin-left: auto;
`;

const CryptoExchange = () => {
	return (
		<Root>
			<CryptoInput label="You Send" />

			<ReverseButtonWrapper>
				<ReverseButton />
			</ReverseButtonWrapper>

			<CryptoInput label="You Get" />
		</Root>
	);
};

export { CryptoExchange };
