import { memo } from 'react';
import styled from 'styled-components';

const Root = styled.div`
	position: absolute;
	inset: 0;

	z-index: var(--overlay-z-index);

	background-color: color-mix(in srgb, var(--color-stone-950) 85%, transparent);
`;

const Overlay = memo(() => {
	return <Root role="presentation" aria-hidden="true" />;
});

Overlay.displayName = 'Overlay';
export { Overlay };
