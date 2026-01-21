type Props = {
	className?: string;
	color?: string;
};

const Done_round = ({ className, color }: Props) => {
	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke={color || '#D2D5DA'} strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
};

export default Done_round;
