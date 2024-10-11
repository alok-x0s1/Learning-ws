const Testimonials = () => {
	return (
		<section id="testimonials" className="py-20">
			<div className="container mx-auto text-center">
				<h3 className="text-4xl font-bold mb-12">What Our Users Say</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 md:p-6 xl:p-12">
					<div className="p-6 bg-white/50 rounded-lg shadow-sm hover:shadow-foreground hover:-translate-y-1 duration-300">
						<p className="mb-4 text-lg">
							"ChatApp has completely changed how we communicate
							within our team. It’s fast, reliable, and easy to
							use."
						</p>
						<h4 className="text-3xl font-bold">- Alex Johnson</h4>
					</div>
					<div className="p-6 bg-white/50 rounded-lg shadow-sm hover:shadow-foreground hover:-translate-y-1 duration-300">
						<p className="mb-4 text-xl">
							"The ability to create private rooms is a
							game-changer. It helps us keep client conversations
							secure."
						</p>
						<h4 className="text-3xl font-bold">- Emily Carter</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
