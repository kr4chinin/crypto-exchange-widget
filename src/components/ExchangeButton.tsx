import { Button } from '@mantine/core';
import { memo } from 'react';
import type { EnhancedMantineButtonProps } from '~/types/EnhancedMantineButtonProps';

const ExchangeButton = memo((props: EnhancedMantineButtonProps) => {
	return (
		<Button
			w="fit-content"
			variant="gradient"
			gradient={{ from: 'gray', to: 'cyan', deg: 156 }}
			{...props}
		>
			Exchange
		</Button>
	);
});

ExchangeButton.displayName = 'ExchangeButton';
export { ExchangeButton };
