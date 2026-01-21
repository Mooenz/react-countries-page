import img from '@/assets/hero-image.jpg';
import imgSm from '@/assets/hero-image-sm.jpg';
import Logo from '@/assets/Logo';
import { Link } from 'react-router';

const Header = () => {
	return (
		<header className="relative bg-img-bg">
			<picture>
				<source srcSet={imgSm} media="(max-width: 1280px)" width={960} height={225} />
				<img className="pt-9 xl:pt-0 w-full h-75 object-cover" src={img} alt="Background image word" title="Imagen word" width={1280} height={300} />
			</picture>

			<Link to="/" className="absolute top-14 md:top-30 left-1/2 -translate-x-1/2">
				<Logo />
			</Link>
		</header>
	);
};

export default Header;
