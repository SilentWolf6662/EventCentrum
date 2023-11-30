/* eslint-disable @next/next/no-img-element */
'use client';
export default function Home() {
	function readMore() {
		location.href = "./";
	};
	return (
		<>
			<header className="tw-flex tw-w-full tw-justify-between tw-bg-primary tw-h-[50px] tw-content-center tw-text-white">
				<figure className="tw-px-10 tw-py-2 tw-ml-10">
					<img src="/logo_color.png" alt="Event Centrum logo" className="tw-w-full"></img>
				</figure>
				<nav className="tw-px-10 tw-py-5">
					<ul className="tw-flex tw-row tw-space-x-5">
						<li>
							<a className="tw-text-[14px] tw-no-underline" href="./">Forside</a>
						</li>
						<li>
							<a className="tw-text-[14px] tw-no-underline" href="./">Events</a>
						</li>
						<li>
							<a className="tw-text-[14px] tw-no-underline" href="./">Referencer</a>
						</li>
						<li>
							<a className="tw-text-[14px] tw-no-underline" href="./">Kontakt</a>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<article>
					<section className="tw-h-[500px] tw-w-full tw-bg-[url('/img/aleksandr-popov-hTv8aaPziOQ-unsplash.jpg')] tw-bg-cover tw-bg-center tw-text-white">
						<div className="tw-h-full tw-flex tw-w-full tw-justify-center tw-items-center tw-flex-col">
							<h2 className="tw-mt-[100px] tw-mb-[40px] tw-text-[14px] md:tw-text-[24px]">Drømmer du om eksklusiv elegance til dit event?</h2>
							<button className="bs-btn 	btn-outline-primary tw-mt-[100px]" onClick={readMore}>Læs mere</button>
						</div>
					</section>
					<section className="tw-h-full md:tw-h-[444px] tw-flex tw-flex-col md:tw-flex-row">
						<div className="tw-h-full md:tw-h-[444px] tw-w-full md:tw-w-1/2 tw-bg-about tw-text-white">
							<div className="tw-m-10 tw-text-justify">
								<h1 className="tw-mb-5 tw-text-[24px] md:tw-text-[36px]">Hvem er vi?</h1>
								<h3 className="tw-mb-4 tw-text-[11px] md:tw-text-[14px]">
									Event Centrum er et ambitiøst og topprofessionelt
									<br />
									eventbureau med fuld fokus på slutproduktet og værdi-
									<br />
									en for deltagerne.
								</h3>
								<h3 className="tw-mb-4 tw-text-[11px] md:tw-text-[14px]">
									Gennem årene har virksomheden udviklet og realiseret
									events for en lang række virksomheder og privatper-
									soner. Blandt vores gode venner finder man Vestas,
									Grundfos, Nordea, Danske Bank, Targit, Nordisk film,
									H&M, Top Danmark og Spar Nord.
								</h3>
								<h3 className="tw-mb-4 tw-text-[11px] md:tw-text-[14px]">
									Læs hvad de siger om os, kig rundt og ellers velkom-
									<br />
									men indenfor på vort website.
								</h3>
							</div>
						</div>
						<div className="tw-h-full md:tw-h-[444px] tw-w-full md:tw-w-1/2 tw-bg-white tw-text-black">
							<div className="tw-m-10 tw-text-justify tw-flex tw-flex-col">
								<div className="tw-flex tw-py-4">
									<figure>
										<img src="/img/calender.png" alt="Calender Icon" className="tw-w-20 tw-pr-2"></img>
									</figure>
									<div>
										<h3 className="tw-font-bold tw-mb-2 tw-text-[11px] md:tw-text-[14px]">
											Du vælger datoen
										</h3>
										<p className="tw-text-[8px] md:tw-text-[11px]">
											Vi er altid klar, Uanset hvornår du har behov for at en event
											skal løbe af stablen, leveret vi attid det bedste resultat
										</p>
									</div>
								</div>
								<div className="tw-flex tw-py-4">
									<figure>
										<img src="/img/idea.png" alt="Idea Icon" className="tw-w-20 tw-pr-2"></img>
									</figure>
									<div>
										<h3 className="tw-font-bold tw-mb-2 tw-text-[11px] md:tw-text-[14px]">
											Vi er fyldt med gode ideer
										</h3>
										<p className="tw-text-[8px] md:tw-text-[11px]">
											Hvis du mangler lidt input til dit event har vi altid en bred vifte
											af ideer og muligheder du kan lade dig inspirere af.
										</p>
									</div>
								</div>
								<div className="tw-flex tw-py-4">
									<figure>
										<img src="/img/connection.png" alt="Connection Icon" className="tw-w-20 tw-pr-2"></img>
									</figure>
									<div>
										<h3 className="tw-font-bold tw-mb-2 tw-text-[11px] md:tw-text-[14px]">
											Vi har forbindelserne i orden
										</h3>
										<p className="tw-text-[8px] md:tw-text-[11px]">
											Vort netværk af kendte kunstnere, foredragsholdere, bands,
											stand-up komikere og andre spændende personer er Stort.
										</p>
									</div>
								</div>
								<div className="tw-flex tw-py-4">
									<figure>
										<img src="/img/contact.png" alt="Contact Icon" className="tw-w-20 tw-pr-2"></img>
									</figure>
									<div>
										<h3 className="tw-font-bold tw-mb-2 tw-text-[11px] md:tw-text-[14px]">
											Kontakten er det vigtigste
										</h3>
										<p className="tw-text-[8px] md:tw-text-[11px]">
											Vi tror på at god kommunikation med kunden er grundlaget for
											en succesfuld event. Derfor kan du altid få fat på os 24 - 7.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</article >
			</main >

			<footer className="tw-flex tw-w-full tw-justify-between tw-bg-footer tw-h-[925px] md:tw-h-[580px] tw-content-center tw-text-white tw-flex-col md:tw-flex-row">
				<div className="tw-flex tw-w-full tw-flex-col md:tw-flex-row">
					<div className="tw-w-full md:tw-w-1/2">
						<div className="tw-m-10 tw-mt-16">
							<h1 className="tw-text-[24px] md:tw-text-[36px]">
								Kontakt os
							</h1>
							<p className="tw-text-[8px] md:tw-text-[11px]">
								Kontakt os og få en uforpligtende snak om muligheder <br /> for jeres event, fest, eller konference.
							</p>
							<div className="tw-flex tw-m-4 tw-items-center">
								<figure className="tw-mr-4">
									<img src="/img/location.png" alt="Address Icon" className="footer-tw-w-20 tw-pr-2"></img>
								</figure>
								<div>
									<p className="tw-text-[8px] md:tw-text-[11px]">
										Adresse
									</p>
									<p className="tw-items-center tw-text-[8px] md:tw-text-[11px]">
										Ydesvej 5, 8500 Grenaa
									</p>
								</div>
							</div>
							<div className="tw-flex tw-m-4 tw-items-center">
								<figure className="tw-mr-2">
									<img src="/img/phone.png" alt="Address Icon" className="footer-tw-w-20 tw-pr-2"></img>
								</figure>
								<div>
									<p className="tw-text-[8px] md:tw-text-[11px]">
										Ring til os
									</p>
									<p className="tw-items-center tw-text-[8px] md:tw-text-[11px]">
										Tlf. 85 85 85 85
									</p>
								</div>
							</div>
							<div className="tw-flex tw-m-4 tw-items-center">
								<figure className="tw-mr-2">
									<img src="/img/email.png" alt="Address Icon" className="footer-tw-w-20 tw-pr-2"></img>
								</figure>
								<div>
									<p className="tw-text-[8px] md:tw-text-[11px]">
										Send en email
									</p>
									<p className="tw-items-center tw-text-[8px] md:tw-text-[11px]">
										info@eventcentrum.dk
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="tw-w-full md:tw-w-1/2">
						<form action="" className="tw-m-10 tw-p-10 tw-mt-16 tw-bg-form">
							<h3 className="tw-font-bold tw-mb-2 tw-text-[11px] md:tw-text-[14px]">Send os en besked</h3>
							<div className="tw-flex tw-flex-col tw-w-2/3">
								<input type="text" name="name" id="name" placeholder="Skriv dit navn her" className="tw-my-3 tw-p-3 tw-bg-form tw-border tw-border-zinc-400 placeholder:tw-font-bold placeholder:tw-text-[5px] md:placeholder:tw-text-[10px] lg:placeholder:tw-text-[16px]" />
								<input type="email" name="email" id="email" placeholder="Skriv din email her" className="tw-my-3 tw-p-3 tw-bg-form tw-border tw-border-zinc-400 placeholder:tw-font-bold placeholder:tw-text-[5px] md:placeholder:tw-text-[10px] lg:placeholder:tw-text-[16px]" />
								<textarea name="message" id="message" cols={20} rows={5} placeholder="Skriv din besked her" className="tw-resize-none tw-my-3 tw-p-3 tw-bg-form tw-border tw-border-zinc-400 placeholder:tw-font-bold placeholder:tw-text-[5px] md:placeholder:tw-text-[10px] lg:placeholder:tw-text-[16px]"></textarea>
								<button className="tw-bg-[#4a4d52] tw-text-white tw-flex tw-justify-center tw-items-center tw-text-[12px] tw-p-2 tw-my-3 tw-rounded">
									<img src="/img/sendEmail.png" alt="Send Email Icon" className="tw-pr-4" />
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</footer>
		</>
	)
}
