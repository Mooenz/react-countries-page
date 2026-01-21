import { useFilterStore } from '@/store/filterStore';

const TotalCountries = () => {
	const totalCountries = useFilterStore((state) => state.totalCountries);

	return <div>{totalCountries}</div>;
};

export default TotalCountries;
