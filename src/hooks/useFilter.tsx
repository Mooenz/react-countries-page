// hooks/useFilteredCountries.ts
import { useMemo } from 'react';
import { useFilterStore } from '@/store/filterStore';
import useGetCountries from '@/hooks/useGetCountries';
import type { Region, Countries } from '@/types';

const compareNumbers = (a: number, b: number): number => {
	if (a === b) return 0;
	return a > b ? 1 : -1;
};

const sortStrategies = {
	population: (a: Countries, b: Countries) => compareNumbers(b.population, a.population),
	name: (a: Countries, b: Countries) => a.name.common.localeCompare(b.name.common),
	area: (a: Countries, b: Countries) => compareNumbers(b.area || 0, a.area || 0),
	region: (a: Countries, b: Countries) => a.region.localeCompare(b.region),
};

const useFilteredCountries = () => {
	// Obtener datos de la API
	const { countries, isLoading, error } = useGetCountries();

	// Obtener filtros de la store
	const filters = useFilterStore((state) => state.filters);

	// Aplicar filtros
	const filteredCountries = useMemo(() => {
		let result = [...countries];

		// Filtro por texto
		if (filters.filterText.trim()) {
			const search = filters.filterText.toLowerCase();
			result = result.filter((country) => country.name.common?.toLowerCase().includes(search));
		}

		// Filtro por regiones
		if (filters.selectedRegions.length > 0) {
			result = result.filter((country) => filters.selectedRegions.includes(country.region as Region));
		}

		// Filtro por status
		if (filters.selectedStatus.length > 0) {
			result = result.filter((country) => {
				return filters.selectedStatus.some((status) => {
					if (status === 'unMember') return country.unMember === true;
					if (status === 'independent') return country.independent === true;
					return false;
				});
			});
		}

		// Ordenar
		const sortFn = sortStrategies[filters.sortBy as keyof typeof sortStrategies];
		if (sortFn) {
			result.sort(sortFn);
		}

		return result;
	}, [countries, filters]);

	return {
		countries: filteredCountries,
		isLoading,
		error,
		filteredCount: filteredCountries.length,
	};
};

export default useFilteredCountries;
