import { useState, useEffect } from 'react';
import type { Country } from '@/types';

type Props = {
	name?: string;
};

const useGetCountry = ({ name }: Props) => {
	const [country, setCountry] = useState<Country[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Si no hay nombre, no hacer nada
		if (!name) {
			setIsLoading(false);
			return;
		}

		const URL = `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=flags,name,population,region,area,unMember,independent,capital,subregion,languages,currencies,borders`;

		const fetchCountry = async () => {
			try {
				setIsLoading(true);
				setError(null);

				const response = await fetch(URL);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setCountry(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Error fetching country');
				console.error('Error fetching country data:', err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCountry();
	}, [name]);

	return { country: country[0], setCountry, isLoading, error };
};

export default useGetCountry;
