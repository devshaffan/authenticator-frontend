import React from "react";

export const Dashboard = () => {
	return (
		<>
			<header className="bg-gray-100 dark:bg-gray-800 py-6 shadow-md">
				<div className="container mx-auto px-6">
					<h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
						Dashboard
					</h1>
				</div>
			</header>

			<section className="bg-white dark:bg-gray-900">
				<div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
					<div className="mx-auto max-w-screen-sm text-center mb-8">
						<p className="text-3xl font-bold tracking-tight text-[#F26838] mb-4">
							Welcome to Authenticator
						</p>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Your personal dashboard to manage authentication and more.
						</p>
					</div>

					<div className="text-center mt-12">
						<button className="bg-[#F26838] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#d05730] transition-colors mx-2">
							Manage Users
						</button>
						<button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors mx-2">
							View Reports
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
