type Props = {
	title: string;
	detail: string;
};

const InfoCountryDetail = ({ title, detail }: Props) => {
	return (
		<p className="w-full flex items-center justify-between text-sm font-medium px-5 py-6 border-b border-secondary">
			{title} <span> {detail}</span>
		</p>
	);
};

export default InfoCountryDetail;
