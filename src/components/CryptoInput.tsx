import { CloseButton, NumberInput, type NumberInputProps } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import styled from 'styled-components';
import type { CmcCoin } from '~/models/CmcCoin';
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
	amount: number;
	coins: CmcCoin[];
	coin: CmcCoin | null;
	setCoin: (coin: CmcCoin) => void;
	setAmount: (amount: number) => void;
}

const CryptoInput = observer((props: Props) => {
	const { label, amount, coins, coin, setAmount, setCoin } = props;

	const handleChange = useCallback<NonNullable<NumberInputProps['onChange']>>(
		value => {
			typeof value === 'number' ? setAmount(value) : setAmount(parseFloat(value) ?? 0);
		},
		[setAmount]
	);

	return (
		<Root>
			<InputLabel>
				{label}

				<StyledNumberInput
					min={0}
					value={amount}
					placeholder="0"
					rightSectionWidth={40}
					rightSection={
						<CloseButton
							variant="transparent"
							aria-label="Clear input"
							onClick={() => setAmount(0)}
							style={{ display: amount ? undefined : 'none' }}
						/>
					}
					onChange={handleChange}
				/>
			</InputLabel>

			<CryptoCombobox coins={coins} coin={coin} setCoin={setCoin} />
		</Root>
	);
});

CryptoInput.displayName = 'CryptoInput';
export { CryptoInput };
