import Done_round from '@/assets/Done_round';

type Props = {
	name: string;
	label: string;
	checked?: boolean;
	handleChange?: (status: string) => void;
};

const FilterStatusOption = ({ name, label, checked, handleChange }: Props) => {
	return (
		<fieldset className="relative flex gap-3 items-center">
			<div className="relative border-2 border-light w-6 h-6 rounded-sm has-[input:checked]:bg-primary has-[input:checked]:border-primary transition-all duration-300 ease-in-out focus-within:bg-primary/10 focus-within:border-primary/50">
				<input onChange={() => handleChange && handleChange(label)} className="cursor-pointer absolute z-10 inset-0 visually-hidden opacity-0 peer" type="checkbox" name={label} id={`${label}UN`} checked={checked}></input>

				<Done_round className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-300 ease-in-out peer-checked:delay-150" />
			</div>

			<label className="text-sm select-none cursor-pointer" htmlFor={`${label}UN`}>
				{name}
			</label>
		</fieldset>
	);
};

export default FilterStatusOption;
