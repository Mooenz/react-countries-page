import FilterText from '@/components/FilterText';
import FilterSelect from '@/components/FilterSelect';
import FilterRegion from '@/components/FilterRegion';
import FilterStatus from '@/components/FilterStatus';
import CountriesList from '@/content/CountriesList';
import TotalCountries from '@/components/TotalCountries';
import ContainerGeneral from '@/content/ContainerGeneral';

const Index = () => {
	return (
		<ContainerGeneral>
			<section className="flex sm:flex-wrap gap-4 items-end justify-between mb-10">
				<h1 className="text-base font-semibold flex items-center gap-2">
					Found <TotalCountries /> Countries
				</h1>

				<FilterText />
			</section>

			<section className="flex items-start gap-7.5">
				<div className="sticky top-6 h-fit flex flex-col gap-8 w-full lg:max-w-65">
					<FilterSelect />
					<FilterRegion />
					<FilterStatus />
				</div>

				<CountriesList />
			</section>
		</ContainerGeneral>
	);
};

export default Index;
