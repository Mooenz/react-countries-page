const Footer = () => {
	return (
		<footer className="mt-10 text-xs bg-dark text-center p-4 text-tertiary border-t border-secondary">
			Desarrollado por{' '}
			<a href="https://www.mooenz.me/" className="text-xs font-bold hover:text-primary transition-colors ease-in-out duration-300">
				Mooenz
			</a>{' '}
			<span className="mx-6">|</span> Desafío de{' '}
			<a className="text-xs font-bold hover:text-primary transition-colors ease-in-out duration-300" href="https://www.devchallenges.io?ref=challenge" target="_blank">
				devChallenges.io
			</a>
			.
		</footer>
	);
};

export default Footer;
