import { useParams } from 'react-router';
import useGetCountry from '@/hooks/useGetCountry';
import ContainerGeneral from '@/content/ContainerGeneral';
import InfoCountryDetail from '@/components/InfoCountryDetail';
import InfoCountryEspecial from '@/components/InfoCountryEspecial';
import Neighbor from '@/components/Neighbor';

const InfoCountry = () => {
	const { name } = useParams();
	const { country, isLoading, error } = useGetCountry({ name: name as string });

	return (
		<ContainerGeneral className="max-w-3xl mx-auto" classNameInternal="!px-0">
			{isLoading && <div>Cargando...</div>}
			{error && <div>Error: {error}</div>}

			{!isLoading && !error && (
				<>
					<figure className="-mt-17.5 px-5">
						<img src={country.flags.png} alt={country.name.common} className="mx-auto mb-6 w-72 h-auto rounded-md shadow-lg" />
					</figure>

					<hgroup className="text-center mb-10 px-5">
						<h1 className="text-[32px] font-bold">{country.name.common}</h1>
						<h2 className="font-medium text-base">{country.name.official}</h2>
					</hgroup>

					<div className="flex items-center justify-center gap-8 mb-10 px-5">
						<InfoCountryEspecial title="Population" detail={country.population.toLocaleString()} />
						<InfoCountryEspecial title="Area" detail={`${country.area.toLocaleString()} km²`} sufijo />
					</div>

					<div className="border-t border-secondary">
						<InfoCountryDetail title="Capital" detail={country.capital.join(', ')} />
						<InfoCountryDetail title="Subregion" detail={country.subregion} />
						<InfoCountryDetail title="Languages" detail={Object.values(country.languages).join(', ')} />
						<InfoCountryDetail
							title="Currencies"
							detail={Object.values(country.currencies)
								.map((currency) => currency.name)
								.join(', ')}
						/>
						<InfoCountryDetail title="Continent" detail={country.region} />
					</div>

					<div className="mt-10 px-5">
						<h2 className="text-sm font-medium mb-5">Neighbouring Countries</h2>
						<Neighbor name={country.borders} />
					</div>
				</>
			)}
		</ContainerGeneral>
	);
};

export default InfoCountry;
