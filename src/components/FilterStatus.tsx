import FilterStatusOption from '@/components/FilterStatusOption';
import { useFilterStore } from '@/store/filterStore';

const FilterStatus = () => {
	const selectedStatus = useFilterStore((state) => state.filters.selectedStatus);
	const setSelectedStatus = useFilterStore((state) => state.setSelectedStatus);

	const handleChange = (status: string) => {
		if (!setSelectedStatus) return;

		if (selectedStatus && selectedStatus.includes(status)) {
			setSelectedStatus(selectedStatus.filter((select) => select !== status));
		} else {
			setSelectedStatus(selectedStatus ? [...selectedStatus, status] : [status]);
		}
	};

	return (
		<>
			<div>
				<span className="block text-light text-xs font-semibold mb-3">Status</span>
				<div className="flex flex-col gap-3">
					<FilterStatusOption name="Member of the United Nations" label="unMember" handleChange={handleChange} checked={selectedStatus?.includes('unMember')} />
					<FilterStatusOption name="Independent" label="independent" handleChange={handleChange} checked={selectedStatus?.includes('independent')} />
				</div>
			</div>
		</>
	);
};

export default FilterStatus;
