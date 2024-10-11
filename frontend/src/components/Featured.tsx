const Featured = () => {
	const features = [
		{
			id: 1,
			heading: "Instant Messaging",
			content:
				"Real-time chat without any lag, ensuring smooth communication.",
		},
		{
			id: 2,
			heading: "Private Rooms",
			content:
				"Create private chat rooms to keep your conversations secure.",
		},
		{
			id: 3,
			heading: "Cross-Platform",
			content:
				"Use ChatApp on any device, whether it's a phone, tablet, or desktop.",
		},
	];
	return (
		<section
			id="features"
			className="py-12 bg-primary border-b border-gray-700"
		>
			<div className="container mx-auto text-center">
				<h3 className="text-4xl font-bold mb-12">Features</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-4 md:p-6 xl:p-12">
					{features &&
						features.map((feature) => (
							<div
								className="px-6 py-8 bg-white/50 rounded-md shadow-sm duration-300 hover:shadow-foreground hover:-translate-y-1"
								key={feature.id}
							>
								<h4 className="text-4xl font-bold mb-4">
									{feature.heading}
								</h4>
								<p className="text-xl">{feature.content}</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Featured;
