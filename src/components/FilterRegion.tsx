import FilterRegionOption from '@/components/FilterRegionOption';
import { useFilterStore } from '@/store/filterStore';
import type { Region } from '@/types/regions';

const regions: Region[] = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania'];

const FilterRegion = () => {
	const selectedRegions = useFilterStore((state) => state.filters.selectedRegions);
	const setSelectedRegions = useFilterStore((state) => state.setSelectedRegions);

	const handleChangeRegion = (region: Region, isChecked: boolean) => {
		let updatedRegions: Region[] = [];

		if (isChecked) {
			updatedRegions = [...selectedRegions, region];
		} else {
			updatedRegions = selectedRegions.filter((regionFilter) => regionFilter !== region);
		}

		setSelectedRegions(updatedRegions);
	};

	return (
		<div>
			<span className="block text-light text-xs font-semibold mb-3">Region</span>

			<div className="flex flex-wrap gap-3">
				{regions.map((region) => (
					<FilterRegionOption key={region} name={region} checked={selectedRegions.includes(region)} onChange={handleChangeRegion} />
				))}
			</div>
		</div>
	);
};

export default FilterRegion;
