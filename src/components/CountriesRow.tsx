import { useNavigate, useSearchParams } from 'react-router';
import type { Countries } from '@/types/countries';

const CountriesRow = ({ country, index }: { country: Countries; index: number }) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const delay = index < 10 ? index * 100 : 1000;

	const handleShowCountry = (nameCountry: string) => {
		const currentParams = Object.fromEntries([...searchParams]);

		navigate({
			pathname: `/country/${nameCountry.toLocaleLowerCase()}`,
			search: new URLSearchParams({ ...currentParams }).toString(),
		});
	};

	return (
		<tr key={country.name.common} className={`group cursor-pointer animate-blurred-fade-in`} onClick={() => handleShowCountry(country.name.official)} style={{ animationDelay: `${delay}ms` }}>
			<td className="align-middle h-15">
				<p className="overflow-hidden group-hover:scale-105 transition-all ease-in-out duration-300">
					<img src={country.flags.png} width={900} height={600} alt={`Flag of ${country.flags.alt}`} className="max-w-13.5 w-full h-full max-h-10 rounded-sm object-cover object-top-left" />
				</p>
			</td>
			<td className="align-middle h-15">
				<p className="text-sm font-medium group-hover:text-primary transition-colors ease-in-out duration-300">{country.name.common}</p>
			</td>
			<td className="align-middle h-15">
				<p className="text-sm font-medium group-hover:text-primary transition-colors ease-in-out duration-300">{country.population}</p>
			</td>
			<td className="align-middle h-15">
				<p className="text-sm font-medium group-hover:text-primary transition-colors ease-in-out duration-300">{country.area}</p>
			</td>
			<td className="align-middle h-15">
				<p className="text-sm font-medium group-hover:text-primary transition-colors ease-in-out duration-300">{country.region}</p>
			</td>
		</tr>
	);
};

export default CountriesRow;
