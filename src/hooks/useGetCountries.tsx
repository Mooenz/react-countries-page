import { useState, useEffect } from 'react';
import type { Countries } from '@/types';

const useGetCountries = () => {
	const [countries, setCountries] = useState<Countries[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const URL = 'https://restcountries.com/v3.1/all?fields=flags,name,population,region,area,unMember,independent';

	const fetchCountries = async () => {
		try {
			setIsLoading(true);
			setError(null);

			const response = await fetch(URL);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			setCountries(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Error fetching countries');
			console.error('Error fetching countries data:', err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchCountries();
	}, []);
	return { countries, setCountries, isLoading, error };
};

export default useGetCountries;
