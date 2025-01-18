import { Button, Tooltip } from '@mantine/core';
import { ArrowRightLeft } from 'lucide-react';
import { memo } from 'react';
import type { EnhancedMantineButtonProps } from '~/types/EnhancedMantineButtonProps';

const ReverseButton = memo((props: EnhancedMantineButtonProps) => {
	return (
		<Tooltip label="Reverse">
			<Button variant="default" {...props} w="fit-content">
				<ArrowRightLeft size={16} />
			</Button>
		</Tooltip>
	);
});

ReverseButton.displayName = 'ReverseButton';
export { ReverseButton };
