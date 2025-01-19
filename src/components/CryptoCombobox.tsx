import { Box, Combobox, InputBase, ScrollArea, useCombobox } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { type ChangeEventHandler, useCallback, useEffect, useState } from 'react';
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
	}, [combobox, coin]);

	const filteredOptions = coins.filter(i => {
		const trimmedIncludes = (str: string) =>
			str.toLowerCase().includes(search.toLowerCase().trim());

		return trimmedIncludes(i.name) || trimmedIncludes(i.symbol);
	});

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
