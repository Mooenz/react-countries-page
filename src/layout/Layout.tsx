import Footer from '@/content/Footer';
import Header from '@/content/Header';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main className='content-center'>{children}</main>
			<Footer />
		</>
	);
};
export default Layout;
