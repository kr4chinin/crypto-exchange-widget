import styled from 'styled-components';
import { Overlay } from './components/Overlay';
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
	return (
		<Root>
			<Overlay />

			<CryptoExchange />
		</Root>
	);
};

export { App };
