import type { CSSProperties } from 'react';
import styled, { keyframes } from 'styled-components';

const flow = keyframes`
  0% {
    background-position: 0 0;
  }
  
  100% {
    background-position: 0 12px;
  }
`;

export const ConnectionLine = styled.div<{ $left: CSSProperties['left'] }>`
	position: absolute;
	top: 82px;
	left: ${p => p.$left};
	bottom: 144px;

	z-index: 3;

	width: 2px;

	background: repeating-linear-gradient(
		to bottom,
		#404040 0,
		#404040 6px,
		transparent 6px,
		transparent 12px
	);
	background-size: 100% 12px;
	box-shadow: 0 0 8px rgba(255, 255, 255, 0.08);
	animation: ${flow} 1s linear infinite;

	&::before,
	&::after {
		content: '';

		position: absolute;
		left: 50%;
		width: 8px;
		height: 8px;

		border-radius: 50%;
		background: #404040;
		transform: translate(-50%, -50%);
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
