import styled from 'styled-components';
import { CryptoInput } from '~/components/CryptoInput';

const Root = styled.div`
	width: 450px;
	height: 350px;

	display: flex;
	flex-direction: column;
	gap: 16px;

	padding: 16px;
	border: 1px solid black;
`;

const CryptoExchange = () => {
	return (
		<Root>
			<CryptoInput label="You Send" />

			<button type="button">{'Change <>'}</button>

			<CryptoInput label="Get Get" />
		</Root>
	);
};

export { CryptoExchange };
