import { Button, type ButtonProps } from '@mantine/core';
import { ArrowRightLeft } from 'lucide-react';
import { memo } from 'react';

const ReverseButton = memo((props: ButtonProps) => {
	return (
		<Button variant="default" {...props} w="fit-content">
			<ArrowRightLeft size={16} />
		</Button>
	);
});

ReverseButton.displayName = 'ReverseButton';
export { ReverseButton };
