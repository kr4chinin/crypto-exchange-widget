import { CloseButton, NumberInput, Skeleton, Text, type NumberInputProps } from '@mantine/core';
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
	gap: 6px;
`;

const LabelWrapper = styled.div`
	height: 24px;

	display: flex;
	align-items: center;
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
	loading: boolean;
	coin: CmcCoin | null;
	setCoin: (coin: CmcCoin) => void;
	setAmount: (amount: number) => void;
}

const CryptoInput = observer((props: Props) => {
	const { label, amount, coins, loading, coin, setAmount, setCoin } = props;

	const handleChange = useCallback<NonNullable<NumberInputProps['onChange']>>(
		value => {
			typeof value === 'number' ? setAmount(value) : setAmount(parseFloat(value) || 0);
		},
		[setAmount]
	);

	const handleClear = useCallback(() => setAmount(0), [setAmount]);

	return (
		<Root>
			<InputLabel>
				<LabelWrapper>{loading ? <Skeleton h={20} w={80} /> : <Text>{label}</Text>}</LabelWrapper>

				<StyledNumberInput
					min={0}
					allowDecimal
					value={amount}
					placeholder="0"
					disabled={loading}
					allowNegative={false}
					rightSectionWidth={40}
					allowLeadingZeros={false}
					rightSection={
						<CloseButton
							variant="transparent"
							aria-label="Clear input"
							style={{ display: amount ? undefined : 'none' }}
							onClick={handleClear}
						/>
					}
					onChange={handleChange}
				/>
			</InputLabel>

			<CryptoCombobox disabled={loading} coins={coins} coin={coin} setCoin={setCoin} />
		</Root>
	);
});

CryptoInput.displayName = 'CryptoInput';
export { CryptoInput };
