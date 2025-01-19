import './styles/main.css';

import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { App } from './App';
import { ErrorFallback } from './components/ErrorFallback';

export const queryClient = new QueryClient();

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
	<QueryClientProvider client={queryClient}>
		<MantineProvider defaultColorScheme="dark">
			<ErrorBoundary fallback={<ErrorFallback />}>
				<App />
			</ErrorBoundary>
		</MantineProvider>
	</QueryClientProvider>
);
