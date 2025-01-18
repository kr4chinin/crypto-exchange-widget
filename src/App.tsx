import styled from 'styled-components';
import { Overlay } from './components/Overlay';
import { CryptoExchange } from './widgets/CryptoExchange';

const Root = styled.div`
	position: relative;

	height: 100dvh;
	width: 100dvw;

	display: flex;
	align-items: center;
	justify-content: center;
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
