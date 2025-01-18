import type { CSSProperties } from 'react';
import styled from 'styled-components';

export const ConnectionLine = styled.div<{ $left: CSSProperties['left'] }>`
	position: absolute;
	top: 78px;
	left: ${p => p.$left};
	bottom: 190px;

	z-index: 3;

	width: 2px;

	background: repeating-linear-gradient(
		to bottom,
		#404040 0,
		#404040 6px,
		transparent 6px,
		transparent 12px
	);
	box-shadow: 0 0 8px rgba(255, 255, 255, 0.08);

	&::before,
	&::after {
		content: '';

		position: absolute;
		left: 50%;
		width: 8px;
		height: 8px;

		border-radius: 50%;
		transform: translate(-50%, -50%);
		background: #404040;
		box-shadow: 0 0 8px rgba(255, 255, 255, 0.12);
	}

	&::before {
		top: 0;
	}

	&::after {
		bottom: 0;
		transform: translate(-50%, 50%);
	}
`;
