import { Link } from "react-router-dom";
import Contact from "./Contact";
import Featured from "./Featured";
import Header from "./Header";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Header />
			<section className="flex items-end justify-center min-h-[50vh] mb-12">
				<div className="text-center">
					<h2 className="text-7xl font-extrabold mb-6">
						Real-Time Chatting Made Easy
					</h2>
					<p className="text-2xl font-semibold mb-10">
						Connect with friends and colleagues in real-time with
						our seamless chat rooms.
					</p>
					<Link
						to="/room"
						className="px-8 py-4 bg-foreground text-white font-semibold rounded hover:bg-foreground/80 transition-colors duration-300"
					>
						Create Room
					</Link>
				</div>
			</section>

			<Featured />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}
