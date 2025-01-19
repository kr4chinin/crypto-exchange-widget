import { Box, Combobox, InputBase, useCombobox } from '@mantine/core';
import { type ChangeEventHandler, useCallback, useState } from 'react';
import styled from 'styled-components';

const cryptos = ['₿ Bitcoin', '💎 Ethereum', '🪙 XRP', '☀️ Solana', '🦷 Tron'];

const StyledComboboxTarget = styled(Combobox.Target)`
	input {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

const CryptoCombobox = () => {
	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	});

	const [value, setValue] = useState<string | null>(null);
	const [search, setSearch] = useState('');

	const shouldFilterOptions = cryptos.every(i => i !== search);
	const filteredOptions = shouldFilterOptions
		? cryptos.filter(i => i.toLowerCase().includes(search.toLowerCase().trim()))
		: cryptos;

	const handleOptionSubmit = useCallback(
		(value: string) => {
			setValue(value);
			setSearch(value);

			combobox.closeDropdown();
		},
		[combobox]
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

		setSearch(value || '');
	}, [combobox, value]);

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

				<Combobox.Dropdown className="combobox">
					<Combobox.Options>
						{filteredOptions.length > 0 ? (
							filteredOptions.map(i => (
								<Combobox.Option value={i} key={i}>
									{i}
								</Combobox.Option>
							))
						) : (
							<Combobox.Empty>Nothing found...</Combobox.Empty>
						)}
					</Combobox.Options>
				</Combobox.Dropdown>
			</Combobox>
		</Box>
	);
};

export { CryptoCombobox };
