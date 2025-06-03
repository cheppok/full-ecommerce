"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";

function redirectToAccountPage() {
	// Replace this with actual authentication code
	const isAuthenticated = true;
	// This should be set based on authentication response

	if (isAuthenticated) {
		window.location.href = "/account"; // Redirect to the account page
	}
}

export default function Login() {
	return (
		<div className="loginPage  dark:bg-black ">
			<Header />
			<main className=" loginMain flex  ">
				<div className="loginImage relative ">
					<Image
						src={"/images/dl.beatsnoop 1.png"}
						height={781}
						width={805}
						alt="login image"
					/>
				</div>

				<div className="loginForm">
					<section className="   dark:bg-gray-900">
						<div className="flex flex-col items-left justify-center mx-auto md:h-screen lg:py-0">
							<div className="w-full  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
								<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
									<h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
										Log in to Cheppok
									</h1>
									<h3>Enter your details below</h3>
									<form
										className="space-y-4 md:space-y-6"
										action="#"
									>
										<div>
											<input
												type="email"
												name="email"
												id="email"
												className="border-b-2 border-b-gray-400 text-gray-900  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
												placeholder="email or phone number"
												required
											/>
										</div>
										<div>
											<input
												type="password"
												name="password"
												id="password"
												placeholder="password"
												className=" border-b-2 border-b-gray-400 text-gray-900  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
												required
											/>
										</div>

										<div
											onClick={() =>
												redirectToAccountPage()
											}
											className="flex  w-full h-full items-center justify-between pt-4"
										>
											<button
												type="submit"
												className=" loginButton  text-white  text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
											>
												Login
											</button>
											<Link
												href="#"
												className=" forgetPassword flex justify-end text-primary-600 hover:underline dark:text-primary-500  "
											>
												Forgot password?
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
