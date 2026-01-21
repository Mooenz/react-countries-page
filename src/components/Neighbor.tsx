import useGetBorders from '@/hooks/useGetBorders';
import NeighborInfo from '@/components/NeighborInfo';
type Props = {
	name?: string[];
};
const Neighbor = ({ name }: Props) => {
	const { borders, isLoading, error } = useGetBorders({ name });
	return (
		<div className="flex flex-wrap gap-4 items-center">
			{isLoading && <div>Cargando...</div>}
			{error && <div>Error: {error}</div>}

			{!isLoading && !error && <>{borders ? borders.map((border) => <NeighborInfo key={border.name.common} borderInfo={border} />) : <p className="text-xs font-medium text-tertiary">No neighbouring countries</p>}</>}
		</div>
	);
};

export default Neighbor;
