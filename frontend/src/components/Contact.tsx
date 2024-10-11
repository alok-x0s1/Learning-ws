const Contact = () => {
	return (
		<section
			id="contact"
			className="py-20 border-t border-b border-foreground"
		>
			<div className="container mx-auto text-center">
				<h3 className="text-5xl font-extrabold mb-8">Get in Touch</h3>
				<p className="mb-6 text-xl font-semibold">
					Have questions? We would love to hear from you.
				</p>
				<form className="w-full max-w-lg mx-auto">
					<div className="mb-4">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full p-4 bg-foreground/75 rounded border border-foreground outline-none font-semibold text-white"
						/>
					</div>
					<div className="mb-4">
						<input
							type="email"
							placeholder="Your Email"
							className="w-full p-4 bg-foreground/75 rounded border border-foreground outline-none text-white font-semibold"
						/>
					</div>
					<div className="mb-6">
						<textarea
							placeholder="Your Message"
							className="w-full p-4 h-32 bg-foreground/75 rounded border border-foreground outline-none text-white font-semibold"
						></textarea>
					</div>
					<button
						type="submit"
						className="px-8 py-4 bg-foreground text-white font-semibold rounded hover:bg-foreground/80 transition-colors duration-300"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
