import { TextInput } from '@mantine/core';
import styled from 'styled-components';
import { CryptoSelect } from './CryptoSelect';

const Root = styled.div`
	width: 100%;

	display: flex;
	align-items: flex-end;
`;

const InputLabel = styled.label`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const StyledTextInput = styled(TextInput)`
	input {
		border-right: none;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;

interface Props {
	label: string;
}

const CryptoInput = (props: Props) => {
	const { label } = props;

	return (
		<Root>
			<InputLabel>
				{label}

				<StyledTextInput type="number" placeholder="0" rightSectionWidth={160} />
			</InputLabel>

			<CryptoSelect />
		</Root>
	);
};

export { CryptoInput };
