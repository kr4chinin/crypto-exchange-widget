import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '~/api/QueryKeys';
import { cryptoExchangeApi } from '../CryptoExchangeApi';

export const useGetCoins = () =>
	useQuery({
		queryKey: QUERY_KEYS.coins,
		refetchOnWindowFocus: false,
		queryFn: cryptoExchangeApi.getCoins,
	});
