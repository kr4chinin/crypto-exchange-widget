import './styles/main.css';

import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './config/createRouter';

export const queryClient = new QueryClient();

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const router = createRouter();

root.render(
	<ErrorBoundary fallback={<div>Something went wrong!</div>}>
		<QueryClientProvider client={queryClient}>
			<MantineProvider>
				<RouterProvider router={router} />
			</MantineProvider>
		</QueryClientProvider>
	</ErrorBoundary>
);
