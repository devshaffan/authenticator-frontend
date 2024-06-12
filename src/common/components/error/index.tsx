import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function ErrorPage() {
	return (
		<section className="bg-gray-900 flex items-center h-screen p-5">
			<div className="container mx-auto text-center">
				<div className="max-w-md mx-auto">
					<h1 className="text-6xl font-bold text-white mb-4">
						Oh no! <span className="text-[#F26838]">500</span>
					</h1>
					<p className="text-xl text-gray-300 mb-4">
						Something went wrong on our end. Our robot is working hard to fix
						it!
					</p>
					<p className="text-md text-gray-400 mb-8">
						In the meantime, you can head back to our homepage or check out some
						of our other features.
					</p>
					<Button
						className="bg-[#F26838] font-bold text-white"
						href="/"
						radius="full"
						as={Link}
						variant="solid"
					>
						Go to Homepage
					</Button>
				</div>
			</div>
		</section>
	);
}
