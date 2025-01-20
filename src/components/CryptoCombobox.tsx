import { Box, Combobox, InputBase, ScrollArea, useCombobox } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { type ChangeEventHandler, useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import type { CmcCoin } from '~/models/CmcCoin';

const StyledComboboxTarget = styled(Combobox.Target)`
	input {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

interface Props {
	coins: CmcCoin[];
	coin: CmcCoin | null;
	disabled?: boolean;
	setCoin: (coin: CmcCoin) => void;
}

const CryptoCombobox = observer((props: Props) => {
	const { coins, coin, disabled, setCoin } = props;

	const [search, setSearch] = useState<string>(coin?.symbol || '');

	const combobox = useCombobox({
		onDropdownClose: () => {
			combobox.resetSelectedOption();

			setSearch(coin?.symbol || '');
		},
	});

	useEffect(() => {
		// eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
		if (coin) setSearch(coin.symbol);
	}, [coin]);

	const filteredOptions = useMemo(() => {
		const trimmedSearch = search.toLowerCase().trim();

		if (!trimmedSearch) return coins;

		return coins.filter(i => {
			const trimmedIncludes = (str: string) => str.toLowerCase().includes(trimmedSearch);

			return trimmedIncludes(i.name) || trimmedIncludes(i.symbol);
		});
	}, [coins, search]);

	const handleOptionSubmit = useCallback(
		(id: string) => {
			const selectedCoin = coins.find(i => String(i.id) === id);

			if (!selectedCoin) throw new Error(`Coin with id ${id} was not found`);

			setCoin(selectedCoin);
			setSearch(selectedCoin.symbol);

			combobox.closeDropdown();
		},
		[combobox, coins, setCoin]
	);

	const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = useCallback(
		e => {
			const value = e.currentTarget.value;

			setSearch(value);

			combobox.openDropdown();
			combobox.updateSelectedOptionIndex();
		},
		[combobox]
	);

	const handleFocus = useCallback(() => combobox.openDropdown(), [combobox]);

	return (
		<Box pos="relative">
			<Combobox
				store={combobox}
				disabled={disabled}
				withinPortal={false}
				onOptionSubmit={handleOptionSubmit}
			>
				<StyledComboboxTarget>
					<InputBase
						value={search}
						disabled={disabled}
						placeholder="Search coin"
						rightSectionPointerEvents="none"
						rightSection={<Combobox.Chevron />}
						onChange={handleChangeSearch}
						onFocus={handleFocus}
					/>
				</StyledComboboxTarget>

				<Combobox.Dropdown className="combobox-dropdown">
					<ScrollArea.Autosize mah={320} type="scroll">
						<Combobox.Options>
							{filteredOptions.length > 0 ? (
								filteredOptions.map(o => (
									<Combobox.Option value={String(o.id)} key={o.id}>
										{o.name} / {o.symbol}
									</Combobox.Option>
								))
							) : (
								<Combobox.Empty>Nothing found...</Combobox.Empty>
							)}
						</Combobox.Options>
					</ScrollArea.Autosize>
				</Combobox.Dropdown>
			</Combobox>
		</Box>
	);
});

CryptoCombobox.displayName = 'CryptoCombobox';
export { CryptoCombobox };
