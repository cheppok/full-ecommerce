import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";

export default function Signup() {
	return (
		<div>
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
										Create an account
									</h1>
									<h3>Enter your details below</h3>
									<form
										className="space-y-4 md:space-y-6"
										action="#"
									>
										<div>
											<input
												type="text"
												name="name"
												id="name"
												className="border-b-2 border-b-gray-300 text-gray-900  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
												placeholder="name"
												required
											/>
										</div>
										<div>
											<input
												type="email"
												name="email"
												id="email"
												className="border-b-2 border-b-gray-300 text-gray-900  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
												className=" border-b-2 border-b-gray-300 text-gray-900  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
												required
											/>
										</div>

										<button
											type="submit"
											className=" bg-red-600 w-full h-11 rounded-md text-white  text-xs text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
										>
											Create Account
										</button>
										<button
											type="submit"
											className="  w-full h-11 rounded-md border-2 border-gray-300 text-xs text-center font-semibold dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative"
										>
											<Image
												src={"/images/icon-Google.jpg"}
												alt="google"
												width={18}
												height={18}
												className="absolute left-16 "
											/>
											Sign up with Google
										</button>
										<Link
											href="/login"
											className="  flex justify-between text-primary-600 dark:text-primary-500  "
										>
											<span>
												Already have an account?
											</span>
											<span className="border-b-2 pb-1 border-gray-300">
												log in
											</span>
										</Link>
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
