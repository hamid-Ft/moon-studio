import {
	ArrowUpLeft,
	ArrowUpRight,
	Code2,
	CreditCard,
	ExternalLink,
	Mail,
	MapPin,
	MonitorCog,
	PanelsTopLeft,
	Phone,
	TabletSmartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { freelanceCVs, type FreelanceSlug } from "@/content/freelance-cvs";
import { localizeDigits, type Locale } from "@/lib/i18n";
import { PrintCV } from "./print-cv";
import "./freelance-profile.css";

const labels = {
	en: {
		portfolio: "Personal portfolio & CV",
		nav: "CV navigation",
		experience: "Experience",
		platform: "Cross-platform",
		projects: "Selected projects",
		skills: "Skills & tools",
		contact: "Contact",
		services: "What I can help you with",
		workTogether: "Let's work together.",
		contactIntro:
			"Have a project in mind? Get in touch directly to discuss the scope and fit.",
		contactButton: "Discuss a freelance project",
		print: "Print / save CV",
		education: "Education & training",
		career: "My professional background",
		selectedWork: "A selection of my work",
		visit: "Visit project",
		back: "Back to Moonlancer",
	},
	fa: {
		portfolio: "پورتفولیو و رزومه شخصی",
		nav: "ناوبری رزومه",
		experience: "سوابق کاری",
		platform: "چندسکویی",
		projects: "پروژه‌های منتخب",
		skills: "مهارت‌ها و ابزارها",
		contact: "تماس",
		services: "چطور می‌توانم به شما کمک کنم",
		workTogether: "با هم کار کنیم.",
		contactIntro:
			"پروژه‌ای در ذهن دارید؟ برای گفت‌وگو درباره نیازها و شرایط همکاری، مستقیم با من در تماس باشید.",
		contactButton: "گفت‌وگو درباره پروژه فریلنس",
		print: "چاپ / ذخیره رزومه",
		education: "تحصیلات و آموزش",
		career: "مسیر حرفه‌ای من",
		selectedWork: "گزیده‌ای از کارهای من",
		visit: "مشاهده پروژه",
		back: "بازگشت به Moonlancer",
	},
};

const contactIcons = {
	email: Mail,
	phone: Phone,
	linkedin: ExternalLink,
	github: Code2,
};

const platformIcons = [MonitorCog, CreditCard, TabletSmartphone, PanelsTopLeft];

export function FreelanceProfile({
	locale,
	slug,
}: {
	locale: Locale;
	slug: FreelanceSlug;
}) {
	const cv = freelanceCVs[slug];
	const copy = labels[locale];
	const Arrow = locale === "fa" ? ArrowUpLeft : ArrowUpRight;
	const primaryContact =
		cv.contacts.find((contact) => contact.kind === "email") ?? cv.contacts[0];
	const initials = cv.name.en
		.split(/\s+/)
		.map((part) => part[0])
		.join("");

	return (
		<div className="cv-page" dir={locale === "fa" ? "rtl" : "ltr"}>
			<header className="cv-header">
				<div className="cv-shell cv-header__inner">
					<Link
						className="cv-brand"
						href={`/${locale}/${slug}`}
						aria-label={cv.name[locale]}
					>
						<span aria-hidden="true">{initials}</span>
						<span>{cv.name[locale]}</span>
					</Link>
					<nav aria-label={copy.nav}>
						{cv.platform ? <a href="#platform">{copy.platform}</a> : null}
						<a href="#experience">{copy.experience}</a>
						<a href="#projects">{copy.projects}</a>
						<a href="#contact">{copy.contact}</a>
					</nav>
					<LanguageSwitcher />
				</div>
			</header>
			<main id="main-content" className="cv-shell">
				<section
					className={`cv-intro${cv.portrait ? " cv-intro--with-portrait" : ""}`}
					aria-labelledby="cv-name"
				>
					{cv.portrait ? (
						<figure className="cv-intro__portrait">
							<Image
								src={cv.portrait.src}
								alt={cv.portrait.alt[locale]}
								width={1254}
								height={1254}
								sizes="(max-width: 767px) 160px, (max-width: 1023px) 192px, 224px"
								priority
							/>
						</figure>
					) : null}
					<div>
						<p className="cv-kicker">{copy.portfolio}</p>
						<h1 id="cv-name">{cv.name[locale]}</h1>
						<p className="cv-role">{cv.role[locale]}</p>
						<p className="cv-summary">{cv.intro[locale]}</p>
						<p className="cv-location">
							<MapPin aria-hidden="true" />
							{cv.location[locale]}
						</p>
						<ul className="cv-print-contacts">
							{cv.contacts.map((contact) => (
								<li key={contact.kind} dir="ltr">
									{contact.kind === "email" || contact.kind === "phone"
										? contact.label
										: contact.href}
								</li>
							))}
						</ul>
						<div className="cv-actions">
							<a className="cv-primary" href={primaryContact.href}>
								{copy.contactButton}
								<Arrow aria-hidden="true" />
							</a>
							<PrintCV label={copy.print} />
						</div>
					</div>
					<aside className="cv-services" aria-labelledby="cv-services-title">
						<p className="cv-kicker">
							{localizeDigits("01", locale)} /{" "}
							{locale === "fa" ? "همکاری فریلنس" : "Freelance services"}
						</p>
						<h2 id="cv-services-title">{copy.services}</h2>
						<ul>
							{cv.services[locale].map((service) => (
								<li key={service}>
									<Arrow aria-hidden="true" />
									{service}
								</li>
							))}
						</ul>
					</aside>
				</section>

				{cv.platform ? (
					<section
						className="cv-section cv-platform"
						id="platform"
						aria-labelledby="cv-platform-title"
					>
						<div className="cv-platform__intro">
							<div>
								<p className="cv-kicker">{cv.platform.kicker[locale]}</p>
								<h2 id="cv-platform-title">{cv.platform.title[locale]}</h2>
							</div>
							<p>{cv.platform.intro[locale]}</p>
						</div>
						<div className="cv-platform__grid">
							{cv.platform.products.map((product, index) => {
								const Icon = platformIcons[index];
								return (
									<article key={product.name.en} className="cv-platform__card">
										<div className="cv-platform__card-meta">
											<span>
												{localizeDigits(
													String(index + 1).padStart(2, "0"),
													locale,
												)}
											</span>
											<Icon aria-hidden="true" />
										</div>
										<h3>{product.name[locale]}</h3>
										<p>{product.detail[locale]}</p>
										<strong lang="en" dir="ltr">
											{product.runtime}
										</strong>
									</article>
								);
							})}
						</div>
					</section>
				) : null}

				<section
					className="cv-section"
					id="experience"
					aria-labelledby="cv-experience-title"
				>
					<div className="cv-section__heading">
						<p className="cv-kicker">{copy.experience}</p>
						<h2 id="cv-experience-title">{copy.career}</h2>
					</div>
					<ol className="cv-timeline">
						{cv.experience.map((job) => (
							<li key={`${job.company.en}-${job.role.en}-${job.period.en}`}>
								<div className="cv-timeline__date">
									<p>{localizeDigits(job.period[locale], locale)}</p>
									<span>{job.arrangement[locale]}</span>
								</div>
								<article>
									<h3>{job.role[locale]}</h3>
									<p className="cv-company">{job.company[locale]}</p>
									<p className="cv-job-summary">{job.summary[locale]}</p>
								</article>
							</li>
						))}
					</ol>
				</section>

				<section
					className="cv-section"
					id="projects"
					aria-labelledby="cv-projects-title"
				>
					<div className="cv-section__heading">
						<p className="cv-kicker">{copy.projects}</p>
						<h2 id="cv-projects-title">{copy.selectedWork}</h2>
					</div>
					<div className="cv-projects">
						{cv.projects.map((project, index) => (
							<article key={project.name} className="cv-project">
								<span className="cv-kicker">
									{localizeDigits(String(index + 1).padStart(2, "0"), locale)}
								</span>
								<h3 lang="en" dir="ltr">
									{project.name}
								</h3>
								<p>{project.summary[locale]}</p>
								{project.stack && (
									<p className="cv-project__stack" lang="en" dir="ltr">
										{project.stack}
									</p>
								)}
								{project.href && (
									<a
										href={project.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${copy.visit}: ${project.name}`}
									>
										{copy.visit}
										<Arrow aria-hidden="true" />
									</a>
								)}
							</article>
						))}
					</div>
				</section>

				<section
					className="cv-section"
					id="skills"
					aria-labelledby="cv-skills-title"
				>
					<div className="cv-section__heading">
						<p className="cv-kicker">
							{locale === "fa" ? "تخصص فنی" : "Technical toolkit"}
						</p>
						<h2 id="cv-skills-title">{copy.skills}</h2>
					</div>
					<div className="cv-skills">
						{cv.skills.map((group) => (
							<div key={group.title.en}>
								<h3>{group.title[locale]}</h3>
								<ul>
									{group.items.map((skill) => (
										<li key={skill} lang="en" dir="ltr">
											{skill}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				<section className="cv-section" aria-labelledby="cv-education-title">
					<div className="cv-section__heading">
						<p className="cv-kicker">
							{locale === "fa" ? "پیشینه تحصیلی" : "Academic background"}
						</p>
						<h2 id="cv-education-title">{copy.education}</h2>
					</div>
					<div className="cv-education">
						{cv.education.map((entry) => (
							<article key={`${entry.degree.en}-${entry.school.en}`}>
								<h3>{entry.degree[locale]}</h3>
								<p>{entry.school[locale]}</p>
								{entry.period[locale] && (
									<p className="cv-education__date">
										{localizeDigits(entry.period[locale], locale)}
									</p>
								)}
							</article>
						))}
					</div>
				</section>

				<section
					className="cv-contact"
					id="contact"
					aria-labelledby="cv-contact-title"
				>
					<div>
						<p className="cv-kicker">{copy.contact}</p>
						<h2 id="cv-contact-title">{copy.workTogether}</h2>
						<p>{copy.contactIntro}</p>
					</div>
					<ul>
						{cv.contacts.map((contact) => {
							const Icon = contactIcons[contact.kind];
							return (
								<li key={contact.kind}>
									<a
										href={contact.href}
										{...(contact.kind === "github" ||
										contact.kind === "linkedin"
											? { target: "_blank", rel: "noopener noreferrer" }
											: {})}
									>
										<Icon aria-hidden="true" />
										<span dir="ltr">{contact.label}</span>
										<Arrow aria-hidden="true" />
									</a>
								</li>
							);
						})}
					</ul>
				</section>
			</main>
			<footer className="cv-footer cv-shell">
				<p>
					{cv.name[locale]} / {copy.portfolio}
				</p>
				<Link href={`/${locale}`}>
					{copy.back}
					<Arrow aria-hidden="true" />
				</Link>
			</footer>
		</div>
	);
}
