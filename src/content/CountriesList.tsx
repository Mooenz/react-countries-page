import { useEffect } from 'react';
import CountriesRow from '@/components/CountriesRow';
import useFilter from '@/hooks/useFilter';
import { useFilterStore } from '@/store/filterStore';
import type { Countries } from '@/types/countries';

const CountriesList = () => {
	const { countries, filteredCount, isLoading, error } = useFilter();
	const { setTotalCountries } = useFilterStore();

	useEffect(() => {
		setTotalCountries(countries.length);
	}, [countries, setTotalCountries]);

	return (
		<>
			{isLoading && <div>Cargando...</div>}
			{error && <div>Error: {error}</div>}

			{!isLoading && !error && (
				<table className="w-full">
					<thead>
						<tr>
							<th className="w-25 border-b-2 border-secondary">
								<p className="pb-4 text-start text-xs font-medium">Flag</p>
							</th>
							<th className="w-[calc(20%-100px)] border-b-2 border-secondary">
								<p className="pb-4 text-start text-xs font-medium">Name</p>
							</th>
							<th className="w-1/5 border-b-2 border-secondary">
								<p className="pb-4 text-start text-xs font-medium">Population</p>
							</th>
							<th className="w-1/5 border-b-2 border-secondary">
								<p className="pb-4 text-start text-xs font-medium">
									Area(km<sup>2</sup>)
								</p>
							</th>
							<th className="w-1/5 border-b-2 border-secondary">
								<p className="pb-4 text-start text-xs font-medium">Region</p>
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredCount > 0 ? (
							countries.map((country: Countries, index: number) => <CountriesRow key={country.name.common} country={country} index={index} />)
						) : (
							<tr className="align-middle h-50 text-center">
								<td colSpan={5}>No countries found</td>
							</tr>
						)}
					</tbody>
				</table>
			)}
		</>
	);
};

export default CountriesList;
