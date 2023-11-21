/* eslint-disable @next/next/no-img-element */
'use client';
export default function Home() {
	function readMore() {
		location.href = "./";
	};
	function submit() {
		location.href = "./";
	};
	return (
		<>
			<header className="flex-w-full tw-justify-between tw-bg-primary tw-h-[50px] tw-content-center">
				<figure className="tw-px-10 tw-py-2 tw-ml-10">
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
					<section className="tw-h-[500px] tw-w-full tw-bg-[url('/img/aleksandr-popov-hTv8aaPziOQ-unsplash.jpg')] tw-bg-cover tw-bg-center">
						<div className="tw-h-full flex-w-full tw-justify-center tw-items-center tw-flex-col">
							<h2 className="tw-mt-[100px] tw-mb-[40px] tw-text-[2vw]">Drømmer du om eksklusiv elegance til dit event?</h2>
							<button className="btn btn-outline-primary tw-mt-[100px]" onClick={readMore}>Læs mere</button>
						</div>
					</section>
					<section className="icon-about-h tw-flex">
						<div className="icon-about-h tw-w-1/2 tw-bg-about">
							<div className="tw-m-10 tw-text-justify">
								<h1 className="tw-mb-5 tw-text-[2vw]">Hvem er vi?</h1>
								<h3 className="tw-mb-4 tw-text-[1vw]">
									Event Centrum er et ambitiøst og topprofessionelt
									<br />
									eventbureau med fuld fokus på slutproduktet og værdi-
									<br />
									en for deltagerne.
								</h3>
								<h3 className="tw-mb-4 tw-text-[1vw]">
									Gennem årene har virksomheden udviklet og realiseret
									events for en lang række virksomheder og privatper-
									soner. Blandt vores gode venner finder man Vestas,
									Grundfos, Nordea, Danske Bank, Targit, Nordisk film,
									H&M, Top Danmark og Spar Nord.
								</h3>
								<h3 className="tw-mb-4 tw-text-[1vw]">
									Læs hvad de siger om os, kig rundt og ellers velkom-
									<br />
									men indenfor på vort website.
								</h3>
							</div>
						</div>
						<div className="icon-about-h tw-w-1/2 tw-bg-white tw-text-black">
							<div className="tw-m-10 tw-text-justify tw-flex tw-flex-col">
								<div className="iconStatement">
									<figure>
										<img src="/img/calender.png" alt="Calender Icon" className="icon"></img>
									</figure>
									<div>
										<h3 className="iconStatementTitle">
											Du vælger datoen
										</h3>
										<p>
											Vi er altid klar, Uanset hvornår du har behov for at en event
											skal løbe af stablen, leveret vi attid det bedste resultat
										</p>
									</div>
								</div>
								<div className="iconStatement">
									<figure>
										<img src="/img/idea.png" alt="Idea Icon" className="icon"></img>
									</figure>
									<div>
										<h3 className="iconStatementTitle">
											Vi er fyldt med gode ideer
										</h3>
										<p>
											Hvis du mangler lidt input til dit event har vi altid en bred vifte
											af ideer og muligheder du kan lade dig inspirere af.
										</p>
									</div>
								</div>
								<div className="iconStatement">
									<figure>
										<img src="/img/connection.png" alt="Connection Icon" className="icon"></img>
									</figure>
									<div>
										<h3 className="iconStatementTitle">
											Vi har forbindelserne i orden
										</h3>
										<p>
											Vort netværk af kendte kunstnere, foredragsholdere, bands,
											stand-up komikere og andre spændende personer er Stort.
										</p>
									</div>
								</div>
								<div className="iconStatement">
									<figure>
										<img src="/img/contact.png" alt="Contact Icon" className="icon"></img>
									</figure>
									<div>
										<h3 className="iconStatementTitle">
											Kontakten er det vigtigste
										</h3>
										<p>
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

			<footer className="flex-w-full tw-justify-between tw-bg-footer tw-h-[580px] tw-content-center">
				<div className="flex-w-full">
					<div className="tw-w-1/2">
						<div className="tw-m-10 tw-mt-16">
							<h1>
								Kontakt os
							</h1>
							<p>
								Kontakt os og få en uforpligtende snak om muligheder <br /> for jeres event, fest, eller konference.
							</p>
							<div className="contact-info">
								<figure className="tw-mr-4">
									<img src="/img/location.png" alt="Address Icon" className="footer-icon"></img>
								</figure>
								<div>
									<p className="footer-contact-title">
										Adresse
									</p>
									<p className="footer-contact-info">
										Ydesvej 5, 8500 Grenaa
									</p>
								</div>
							</div>
							<div className="contact-info">
								<figure className="tw-mr-2">
									<img src="/img/phone.png" alt="Address Icon" className="footer-icon"></img>
								</figure>
								<div>
									<p className="footer-contact-title">
										Ring til os
									</p>
									<p className="footer-contact-info">
										Tlf. 85 85 85 85
									</p>
								</div>
							</div>
							<div className="contact-info">
								<figure className="tw-mr-2">
									<img src="/img/email.png" alt="Address Icon" className="footer-icon"></img>
								</figure>
								<div>
									<p className="footer-contact-title">
										Send en email
									</p>
									<p className="footer-contact-info">
										info@eventcentrum.dk
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="tw-w-1/2">
						<form action="" className="tw-m-10 tw-p-10 tw-mt-16 tw-bg-form">
							<h3 className="iconStatementTitle">Send os en besked</h3>
							<div className="tw-flex tw-flex-col tw-w-2/3">
								<input type="text" name="name" id="name" placeholder="Skriv dit navn her" className="form-input" />
								<input type="email" name="email" id="email" placeholder="Skriv din email her" className="form-input" />
								<textarea name="message" id="message" cols={20} rows={5} placeholder="Skriv din besked her" className="tw-resize-none form-input"></textarea>
								<button className="btn-submit" onClick={submit}>
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
