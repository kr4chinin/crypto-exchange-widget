import styled from 'styled-components';

export const Root = styled.article`
	display: flex;
	flex-direction: column;
	gap: 8px;

	z-index: var(--crypto-exchange-widget-z-index);
`;

export const Label = styled.h1`
	font-size: 24px;
	font-weight: 700;
	color: rgba(255, 255, 255, 0.9);
	letter-spacing: -0.00625em;

	padding-left: 24px;

	text-shadow:
		0 0 7px rgba(255, 255, 255, 0.2),
		0 0 10px rgba(255, 255, 255, 0.1),
		0 0 21px rgba(255, 255, 255, 0.05);
`;

export const ExchangeBlock = styled.div`
	position: relative;

	width: 520px;
	height: 310px;

	display: flex;
	flex-direction: column;

	padding: 16px 24px;
	border-radius: 16px;
	backdrop-filter: blur(8px);
	border: 1px solid var(--color-neutral-950);
	box-shadow:
		0 4px 12px rgba(255, 255, 255, 0.05),
		0 6px 16px -4px rgba(255, 255, 255, 0.06),
		inset 0 0 0 1px rgba(255, 255, 255, 0.085);
	background: color-mix(in srgb, var(--color-neutral-800) 85%, transparent);

	&::after {
		content: '';

		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;

		height: 32px;

		background-image: linear-gradient(
				45deg,
				rgba(255, 255, 255, 0.03) 25%,
				transparent 25%,
				transparent 75%,
				rgba(255, 255, 255, 0.03) 75%
			),
			linear-gradient(
				45deg,
				rgba(255, 255, 255, 0.03) 25%,
				transparent 25%,
				transparent 75%,
				rgba(255, 255, 255, 0.03) 75%
			);
		background-size: 10px 10px;
		background-position:
			0 0,
			5px 5px;
		border-radius: 0 0 16px 16px;
		opacity: 0.8;
	}

	@media (max-width: 768px) {
		width: 358px;

		padding: 16px;
	}
`;

export const ReverseButtonWrapper = styled.div`
	margin: 16px 0 0 auto;
`;

export const ConversionInfoBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-top: 24px;
`;
