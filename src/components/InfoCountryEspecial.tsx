type Props = {
	title: string;
	detail: string;
	sufijo?: boolean;
};

const InfoCountryEspecial = ({ title, detail, sufijo }: Props) => {
	return (
		<div className="w-fit flex items-center justify-between text-sm font-medium p-2 bg-secondary rounded-xl">
			<p className="pl-3 p-2.5 pr-0 text-sm">{title} {sufijo ? ' (km²)' : ''}</p>
			<span className="h-full block ml-5 pl-5 py-2.5 pr-3 border-l border-dark"> {detail}</span>
		</div>
	);
};

export default InfoCountryEspecial;
