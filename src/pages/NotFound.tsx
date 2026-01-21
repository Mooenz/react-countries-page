import { Link } from 'react-router';

const NotFound = () => {
	return (
		<>
			<h1 className="text-3xl font-bold mb-4 text-center pt-10">404 - Page Not Found</h1>
			<p className="font-medium mb-10 text-center">The page you are looking for does not exist.</p>
			<Link to="/" className="bg-primary font-semibold rounded-md px-6 py-3 text-white hover:bg-secondary transition-all ease-in-out duration-300 ring-2 ring-primary hover:ring-white mx-auto w-fit block">
				home page
			</Link>
		</>
	);
};

export default NotFound;
