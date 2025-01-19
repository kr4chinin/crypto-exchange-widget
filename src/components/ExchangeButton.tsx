import { Button, type MantineGradient } from '@mantine/core';
import { memo } from 'react';
import type { EnhancedMantineButtonProps } from '~/types/EnhancedMantineButtonProps';

const customGradient: MantineGradient = { from: 'gray', to: 'cyan', deg: 156 };

const ExchangeButton = memo((props: EnhancedMantineButtonProps) => {
	return (
		<Button w="fit-content" variant="gradient" gradient={customGradient} {...props}>
			Exchange
		</Button>
	);
});

ExchangeButton.displayName = 'ExchangeButton';
export { ExchangeButton };
