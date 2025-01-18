import { Box, Combobox, InputBase, useCombobox } from '@mantine/core';
import { useState } from 'react';
import styled from 'styled-components';

const groceries = [
	'🍎 Apples',
	'🍌 Bananas',
	'🥦 Broccoli',
	'🥕 Carrots',
	'🍫 Chocolate',
	'🍇 Grapes',
];

const StyledCombobox = styled(Combobox)``;

const StyledComboboxTarget = styled(Combobox.Target)`
	input {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

const CryptoSelect = () => {
	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	});

	const [value, setValue] = useState<string | null>(null);
	const [search, setSearch] = useState('');

	const shouldFilterOptions = groceries.every(item => item !== search);
	const filteredOptions = shouldFilterOptions
		? groceries.filter(item => item.toLowerCase().includes(search.toLowerCase().trim()))
		: groceries;

	const options = filteredOptions.map(item => (
		<Combobox.Option value={item} key={item}>
			{item}
		</Combobox.Option>
	));

	return (
		<Box pos="relative">
			<StyledCombobox
				store={combobox}
				withinPortal={false}
				onOptionSubmit={val => {
					setValue(val);
					setSearch(val);
					combobox.closeDropdown();
				}}
			>
				<StyledComboboxTarget>
					<InputBase
						rightSection={<Combobox.Chevron />}
						value={search}
						onChange={event => {
							combobox.openDropdown();
							combobox.updateSelectedOptionIndex();
							setSearch(event.currentTarget.value);
						}}
						onClick={() => combobox.openDropdown()}
						onFocus={() => combobox.openDropdown()}
						onBlur={() => {
							combobox.closeDropdown();
							setSearch(value || '');
						}}
						placeholder="Search value"
						rightSectionPointerEvents="none"
					/>
				</StyledComboboxTarget>

				<Combobox.Dropdown className="combobox">
					<Combobox.Options>
						{options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
					</Combobox.Options>
				</Combobox.Dropdown>
			</StyledCombobox>
		</Box>
	);
};

export { CryptoSelect };
