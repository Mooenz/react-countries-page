import Search from '@/assets/Search';
import { useFilterStore } from '@/store/filterStore';

const FilterText = () => {
	const filterText = useFilterStore((state) => state.filters.filterText);
	const setTextFilter = useFilterStore((state) => state.setTextFilter);

	return (
		<fieldset className="relative w-full h-11.25 md:max-w-85 bg-secondary rounded-xl overflow-hidden focus-within:bg-primary/10 transition-all ease-in-out duration-300 border-2 border-transparent focus-within:border-primary/50">
			<label htmlFor="searchByWord" className="sr-only">
				Search by word
			</label>
			<input className="w-full h-full outline-none pl-10 placeholder:text-light text-sm" type="text" name="searchByWord" id="searchByWord" placeholder="Search by Name, by Region, Subregion" onChange={(e) => setTextFilter(e.target.value)} value={filterText} />
			<Search className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" color="#d2d5da" />
		</fieldset>
	);
};

export default FilterText;
