type Props = {
	children: React.ReactNode;
	className?: string;
	classNameInternal?: string;
};

const ContainerGeneral = ({ children, className, classNameInternal }: Props) => {
	return (
		<section className={`relative z-10 px-3 md:px-8 -mt-31.25 md:-mt-16.5 ${className}`}>
			<section className={`bg-dark border text-light border-secondary p-3 pt-6 mx-auto lg:p-8 lg:pt-6 w-full max-w-7xl shadow-lg shadow-img-bg/15 rounded-xl ${classNameInternal}`}>{children}</section>
		</section>
	);
};

export default ContainerGeneral;
