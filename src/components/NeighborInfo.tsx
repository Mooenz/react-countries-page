import type { Borders } from '@/types';
import { Link } from 'react-router';

type Props = {
	borderInfo: Borders;
};

const NeighborInfo = ({ borderInfo }: Props) => {
	return (
		<Link to={`/country/${borderInfo.name.official.toLowerCase()}`} className="flex flex-col gap-2 cursor-pointer group">
			<figure>
				<img className="object-cover w-20 h-15 group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-sm" src={borderInfo.flags.png} alt={borderInfo.flags.alt} />
			</figure>
			<h3 className="text-xs font-medium">{borderInfo.name.common}</h3>
		</Link>
	);
};

export default NeighborInfo;
