export type Countries = {
	name: {
		common: string;
		official: string;
	};
	population: number;
	region: string;
	area: number;
	unMember: boolean;
	independent: boolean;
	flags: {
		png: string;
		alt: string;
	};
};
