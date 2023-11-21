/* eslint-disable @next/next/no-img-element */
export default function Home() {
	return (
		<>
			<header className="tw-flex tw-justify-between tw-bg-primary tw-h-[50px] tw-w-full tw-content-center">
				<figure className="tw-h-[30px] tw-px-20 tw-py-2">
					<img src="/logo_color.png" alt="Event Centrum logo" className="tw-w-full"></img>
				</figure>
				<nav className="tw-px-10 tw-py-5">
					<ul className="tw-flex tw-row tw-space-x-5">
						<li>
							<a href="./">Forside</a>
						</li>
						<li>
							<a href="./">Events</a>
						</li>
						<li>
							<a href="./">Referencer</a>
						</li>
						<li>
							<a href="./">Kontakt</a>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<article>
					<section className="tw-h-[500px] tw-w-full tw-bg-[url('/img/aleksandr-popov-hTv8aaPziOQ-unsplash.jpg')] tw-bg-cover tw-bg-center tw-flex tw-justify-center tw-place-items-center">
						<h2 className=" ">Drømmer du om eksklusiv elegance til dit event?</h2>
						<button className="btn btn-outline-primary">Læs mere</button>
					</section>
					<section className="tw-h-[444px] tw-flex">
						<div className="tw-h-[444px] tw-w-1/2 tw-bg-about">

						</div>
						<div className="tw-h-[444px] tw-w-1/2 tw-bg-white">

						</div>
					</section>
				</article>
			</main>

			<footer className="tw-flex tw-justify-between tw-bg-primary tw-h-[480px] tw-w-full tw-content-center">

			</footer>
		</>
	)
}
