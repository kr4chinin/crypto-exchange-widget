import { Button, Tooltip, type ButtonProps } from '@mantine/core';
import { ArrowRightLeft } from 'lucide-react';
import { memo } from 'react';

const ReverseButton = memo((props: ButtonProps) => {
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
