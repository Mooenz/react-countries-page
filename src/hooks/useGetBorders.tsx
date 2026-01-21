import { useState, useEffect } from 'react';
// import data from '@/dataBorders.json';
import type { Borders } from '@/types';

type Props = {
	name?: string[];
};

const useGetBorders = ({ name }: Props) => {
	const [borders, setBorders] = useState<Borders[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const namesBorders = name ? name.join(',') : '';

	useEffect(() => {
		const URL = `https://restcountries.com/v3.1/alpha?codes=${namesBorders}&fields=name,flags`;
		const fetchBorders = async () => {
			try {
				setIsLoading(true);
				setError(null);

				const response = await fetch(URL);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setBorders(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Error fetching countries');
				console.error('Error fetching countries data:', err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchBorders();
	}, [namesBorders]);
	return { borders, setBorders, isLoading, error };
};

export default useGetBorders;
