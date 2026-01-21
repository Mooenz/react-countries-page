import type { Region } from "@/types/regions";

type Props = {
	name: Region;
	checked: boolean;
	onChange: (name: Region, checked: boolean) => void;
};

const FilterRegionOption = ({ name, checked, onChange }: Props) => {
	return (
		<fieldset className="relative">
			<input className="absolute z-10 inset-0 visually-hidden opacity-0 peer cursor-pointer" type="checkbox" name={name} id={name} onChange={(e) => onChange(name, e.target.checked)} checked={checked} />
			<label className="block text-sm select-none px-3 p-2 hover:bg-secondary peer-checked:bg-secondary peer-focus:bg-primary/10 peer-focus:border-primary/50 transition-colors duration-300 ease-in-out cursor-pointer rounded-xl border-2 border-transparent peer-checked:border-transparent" htmlFor={name}>
				{name}
			</label>
		</fieldset>
	);
};

export default FilterRegionOption;
