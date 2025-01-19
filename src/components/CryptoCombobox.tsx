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
	setCoin: (coin: CmcCoin) => void;
}

const CryptoCombobox = observer((props: Props) => {
	const { coins, coin, setCoin } = props;

	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	});

	const [search, setSearch] = useState('');

	useEffect(() => {
		// we need to wait for options to render before we can select first one
		combobox.selectFirstOption();

		// eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
		setSearch(coin?.name || '');
	}, [combobox, coin]);

	const filteredOptions = useMemo<CmcCoin[]>(() => {
		const trimmedSearch = search.toLowerCase().trim();

		if (!trimmedSearch) return coins;

		return coins.filter(i => {
			const trimmedIncludes = (str: string) => str.toLowerCase().includes(trimmedSearch);

			return trimmedIncludes(i.name) || trimmedIncludes(i.symbol);
		}) as CmcCoin[];
	}, [coins, search]);

	const handleOptionSubmit = useCallback(
		(id: string) => {
			const coin = coins.find(i => String(i.id) === id);

			if (!coin) throw new Error(`Coin with id ${id} was not found`);

			setCoin(coin);
			setSearch(coin.name);

			combobox.closeDropdown();
		},
		[combobox, coins, setCoin]
	);

	const handleChangeSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(
		e => {
			combobox.openDropdown();
			combobox.updateSelectedOptionIndex();

			setSearch(e.currentTarget.value);
		},
		[combobox]
	);

	const handleClick = useCallback(() => combobox.openDropdown(), [combobox]);

	const handleFocus = useCallback(() => combobox.openDropdown(), [combobox]);

	const handleBlur = useCallback(() => {
		combobox.closeDropdown();

		setSearch(coin?.name || '');
	}, [combobox, coin]);

	return (
		<Box pos="relative">
			<Combobox store={combobox} withinPortal={false} onOptionSubmit={handleOptionSubmit}>
				<StyledComboboxTarget>
					<InputBase
						value={search}
						placeholder="Search value"
						rightSectionPointerEvents="none"
						rightSection={<Combobox.Chevron />}
						onBlur={handleBlur}
						onClick={handleClick}
						onFocus={handleFocus}
						onChange={handleChangeSearch}
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
