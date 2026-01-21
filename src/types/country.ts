export type Country = {
	name: {
		common: string;
		official: string;
		nativeName?: {
			[key: string]: {
				official: string;
				common: string;
			};
		};
	};
	population: number;
	region: string;
	subregion: string;
	area: number;
	capital: string[];
	languages: {
		[key: string]: string;
	};
  borders?: string[];
	currencies: {
		[key: string]: {
			name: string;
			symbol: string;
		};
	};
	flags: {
		png: string;
		alt: string;
	};
};
