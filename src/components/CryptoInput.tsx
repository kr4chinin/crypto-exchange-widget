import { CloseButton, NumberInput } from '@mantine/core';
import { useState } from 'react';
import styled from 'styled-components';
import { CryptoCombobox } from './CryptoCombobox';

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

const StyledNumberInput = styled(NumberInput)`
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

	const [value, setValue] = useState<number | string>('');

	return (
		<Root>
			<InputLabel>
				{label}

				<StyledNumberInput
					min={0}
					value={value}
					placeholder="0"
					rightSectionWidth={40}
					rightSection={
						<CloseButton
							variant="transparent"
							aria-label="Clear input"
							onClick={() => setValue('')}
							style={{ display: value ? undefined : 'none' }}
						/>
					}
					onChange={setValue}
				/>
			</InputLabel>

			<CryptoCombobox />
		</Root>
	);
};

export { CryptoInput };
