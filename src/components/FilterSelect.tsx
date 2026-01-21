import { useFilterStore } from '@/store/filterStore';

const FilterSelect = () => {
	const sortBy = useFilterStore((state) => state.filters.sortBy);
	const setSortBy = useFilterStore((state) => state.setSortBy);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortBy(e.target.value);
	};

	return (
		<fieldset>
			<label className="block text-light text-xs font-semibold mb-3" htmlFor="sortBy">
				Sort by
			</label>

			<div className="relative border-2 border-secondary rounded-xl overflow-hidden w-full max-h-40 focus-within:border-primary/50 transition-all ease-in-out duration-300">
				<select className="w-full h-full text-sm px-3 py-2 border-r-12 border-transparent bg-dark focus:bg-primary/10 outline-none cursor-pointer transition-all ease-in-out duration-300" id="sortBy" name="sortBy" value={sortBy} onChange={handleChange}>
					<option className="bg-secondary" value="name">
						Name
					</option>
					<option className="bg-secondary" value="population">
						Population
					</option>
					<option className="bg-secondary" value="area">
						Area
					</option>
					<option className="bg-secondary" value="region">
						Region
					</option>
				</select>
			</div>
		</fieldset>
	);
};

export default FilterSelect;
