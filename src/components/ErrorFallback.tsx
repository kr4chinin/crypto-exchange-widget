import { Text } from '@mantine/core';
import styled from 'styled-components';

const Root = styled.div`
	height: 100dvh;
	width: 100dvw;

	display: flex;
	align-items: center;
	justify-content: center;

	padding-bottom: 80px;
`;

const ErrorFallback = () => {
	return (
		<Root>
			<Text size="xl">💀 Something went wrong!</Text>
		</Root>
	);
};

export { ErrorFallback };
