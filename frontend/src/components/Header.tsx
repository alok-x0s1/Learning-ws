import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="w-full fixed top-0 left-0 backdrop-blur-md py-6 shadow-sm shadow-black">
			<div className="container mx-auto px-6 flex justify-between items-center">
				<Link to="/" className="text-3xl font-extrabold">
					ChatNexus
				</Link>
				<nav>
					<a
						href="#features"
						className="mx-4 text-xl font-bold hover:text-orange-600 transition-colors duration-300"
					>
						Features
					</a>
					<a
						href="#testimonials"
						className="mx-4 text-xl font-bold hover:text-orange-600 transition-colors duration-300"
					>
						Testimonials
					</a>
					<a
						href="#contact"
						className="mx-4 text-xl font-bold hover:text-orange-600 transition-colors duration-300"
					>
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
