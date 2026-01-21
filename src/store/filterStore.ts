import { create } from 'zustand';
import type { Region } from '@/types/index';

interface Filters {
	filterText: string;
	sortBy: string;
	selectedRegions: Region[];
	selectedStatus: string[];
}

interface FilterStore {
	filters: Filters;
	totalCountries: number;

	setTextFilter: (text: string) => void;
	setSortBy: (sortBy: string) => void;
	setSelectedRegions: (regions: Region[]) => void;
	setSelectedStatus: (status: string[]) => void;
	setTotalCountries: (total: number) => void;
}

const initialFilters: Filters = {
	filterText: '',
	sortBy: 'population',
	selectedRegions: ['Americas', 'Africa', 'Asia', 'Europe'],
	selectedStatus: ['independent'],
};

export const useFilterStore = create<FilterStore>((set) => ({
	filters: initialFilters,
	totalCountries: 0,

	setTextFilter: (text: string) => set((state) => ({ filters: { ...state.filters, filterText: text } })),
	setSortBy: (sortBy: string) => set((state) => ({ filters: { ...state.filters, sortBy } })),
	setSelectedRegions: (regions: Region[]) => set((state) => ({ filters: { ...state.filters, selectedRegions: regions } })),
	setSelectedStatus: (status: string[]) => set((state) => ({ filters: { ...state.filters, selectedStatus: status } })),
	setTotalCountries: (total: number) => set(() => ({ totalCountries: total })),
}));
