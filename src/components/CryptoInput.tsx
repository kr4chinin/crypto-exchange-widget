import { Select, TextInput } from '@mantine/core';

const data = [
	{ value: 'eur', label: '🇪🇺 EUR' },
	{ value: 'usd', label: '🇺🇸 USD' },
	{ value: 'cad', label: '🇨🇦 CAD' },
	{ value: 'gbp', label: '🇬🇧 GBP' },
	{ value: 'aud', label: '🇦🇺 AUD' },
];

interface Props {
	label: string;
}

export const CryptoInput = (props: Props) => {
	const { label } = props;

	return (
		<TextInput
			type="number"
			label={label}
			placeholder="1000"
			rightSectionWidth={92}
			rightSection={
				<Select
					data={data}
					rightSectionWidth={28}
					styles={{
						input: {
							fontWeight: 500,
							borderTopLeftRadius: 0,
							borderBottomLeftRadius: 0,
							width: 92,
							marginRight: -2,
						},
					}}
				/>
			}
		/>
	);
};
