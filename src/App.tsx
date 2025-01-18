import styled from 'styled-components';
import { CryptoExchange } from './widgets/CryptoExchange';

const Root = styled.div`
	height: 100dvh;
	width: 100dvw;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const App = () => {
	return (
		<Root>
			<CryptoExchange />
		</Root>
	);
};

export { App };
