import type { Locale } from '@/lib/i18n';

export const contactEmail = 'hamidfattahi.a@gmail.com';
export const founderLinkedIn = 'https://www.linkedin.com/in/hamidft';

export const siteCopy = {
	en: {
		nav: {
			offers: 'Retail platform',
			work: 'Work',
			process: 'Process',
			team: 'Team',
			cta: 'Discuss a system problem',
		},
		headerDescriptor: 'retail systems studio',
		hero: {
			eyebrow: 'Enterprise retail / POS / payments / BNPL / kiosk',
			headline: 'Every store.',
			headlineAccent: 'One connected system.',
			body: 'We design and build your own retail platform—from checkout and self-service to payments, credit, inventory, and the control center behind every location.',
			primary: 'Plan your retail platform',
			secondary: 'Explore our work',
			note: 'Branded, cross-platform retail software built around your operation.',
		},
		problems: {
			kicker: 'Operational pressure',
			title: 'When systems disagree, operations pay the cost.',
			intro: 'The expensive failures rarely live on one screen. They appear between transaction states, inventory records, devices, teams, and reports.',
			items: [
				'Payments complete but invoices or settlement records are missing.',
				'Stores appear online while sales or synchronization has silently stopped.',
				'ERP, ecommerce, warehouse, and reporting systems show different states.',
				'POS devices fail when connectivity becomes unreliable.',
				'Critical reports become slow as operational data grows.',
				'Manual reconciliation and exception handling consume the team’s day.',
			],
		},
		outcomes: {
			kicker: 'Operating outcomes',
			title: 'Make the critical path visible, controlled, and recoverable.',
			items: [
				'Reliable transaction and invoice state',
				'Visible store and device health',
				'Safer offline operation and synchronization',
				'Faster operational reporting',
				'Controlled deployment and rollback',
				'Less manual exception handling',
			],
		},
		platform: {
			kicker: 'Built around your operation',
			title: 'Your own retail platform—not another disconnected tool.',
			intro: 'A product family designed for your brand, your stores, and your operating rules. Start with one critical surface, then connect the rest through a shared commerce core.',
			core: {
				label: 'Shared commerce core',
				title: 'One source of operational truth.',
				body: 'Catalog, pricing, identity, orders, payment state, inventory, device health, and reporting move through defined contracts instead of fragile handoffs.',
				stack: ['Rust services', 'ERP & API integration', 'Offline sync', 'Observability'],
			},
			products: [
				{
					number: '01',
					title: 'Store POS',
					body: 'A fast, branded checkout for cashiers with offline continuity, peripheral support, controlled updates, and recovery paths.',
					platform: 'Linux / Windows / Android',
					features: ['Checkout', 'Returns', 'Receipts', 'Device control'],
				},
				{
					number: '02',
					title: 'Payments, credit & BNPL',
					body: 'Clear customer and operator flows for payment, wallet, credit, installments, refunds, settlement, and reconciliation.',
					platform: 'POS / Web / Mobile',
					features: ['Payment state', 'Credit rules', 'Refunds', 'Reconciliation'],
				},
				{
					number: '03',
					title: 'Self-service kiosk',
					body: 'Touch-first ordering and checkout shaped for your catalog, store format, accessibility needs, and hardware.',
					platform: 'Linux / Windows / Android',
					features: ['Browse', 'Build order', 'Pay', 'Assisted recovery'],
				},
				{
					number: '04',
					title: 'Operations control center',
					body: 'A web control plane for stores, devices, catalog, pricing, promotions, inventory, incidents, and rollout visibility.',
					platform: 'Web / Back office',
					features: ['Store health', 'Inventory', 'Rollouts', 'Reporting'],
				},
			],
		},
		offers: {
			kicker: 'Defined engagements',
			title: 'Start with the smallest paid step that reduces uncertainty.',
			intro: 'Every engagement has written scope, acceptance criteria, one accountable lead, and a controlled change process.',
			items: [
				{
					id: 'systems-diagnostic',
					number: '01',
					title: 'Systems Diagnostic',
					when: 'An operational or technical problem is important, but its cause and delivery scope are still unclear.',
					duration: '3–5 business days',
					deliverable:
						'A system map, risk inventory, prioritized stabilization backlog, and a costed next-step recommendation.',
					cta: 'Request a diagnostic',
				},
				{
					id: 'stabilization-sprint',
					number: '02',
					title: 'Stabilization Sprint',
					when: 'A bounded failure in a live system is creating operational or financial risk.',
					duration: 'Approximately 2 weeks',
					deliverable:
						'A measurable fix to one critical path, with monitoring, acceptance evidence, and written handoff.',
					cta: 'Discuss a sprint',
				},
				{
					id: 'product-delivery',
					number: '03',
					title: 'Product Delivery Pod',
					when: 'A defined capability or integration needs an accountable cross-functional delivery team.',
					duration: '6–12 weeks',
					deliverable:
						'A deployed capability with weekly demonstrations, controlled scope, acceptance criteria, and a handoff plan.',
					cta: 'Discuss product delivery',
				},
				{
					id: 'operations-retainer',
					number: '04',
					title: 'Operations Retainer',
					when: 'A delivered or inherited operational system needs ongoing reliability and reserved improvement capacity.',
					duration: 'Ongoing after system review',
					deliverable:
						'Monitoring, bounded incident response, reliability work, minor improvements, and a monthly risk report.',
					cta: 'Discuss ongoing support',
				},
			],
		},
		work: {
			kicker: 'Evidence, not a gallery',
			title: 'Case studies are published only after the evidence is approved.',
			intro: 'Three anonymized studies are being prepared. Until their facts and artifacts are permissioned, Moonlancer will not present representative concepts as client results.',
			pendingLabel: 'Approval in progress',
			pendingThemes: [
				{
					title: 'Payment and invoice reliability',
					description: 'Transaction, invoice, refund, settlement, and reconciliation states.',
				},
				{
					title: 'Store health and anomaly detection',
					description: 'Store, POS, synchronization, zero-sales, and reporting signals.',
				},
				{
					title: 'Offline POS operations',
					description: 'Devices, synchronization, deployment, updates, backup, and incident visibility.',
				},
			],
			labels: {
				context: 'Context',
				problem: 'Problem',
				responsibility: 'Responsibility',
				result: 'Result',
				read: 'Read case study',
			},
		},
		domains: {
			kicker: 'Domain credibility',
			title: 'Systems the team understands in operating context.',
			items: [
				'Retail and multi-store operations',
				'ERP and inventory integration',
				'POS and offline-first systems',
				'Payments, wallets, invoices, and reconciliation',
				'Ecommerce and fulfillment operations',
				'Reporting, observability, and data workflows',
			],
		},
		process: {
			kicker: 'Delivery sequence',
			title: 'Weekly evidence, explicit decisions, controlled change.',
			items: [
				{
					number: '01',
					title: 'Qualify the problem',
					text: 'Confirm the buyer, operating impact, urgency, access, and whether Moonlancer is the right fit.',
				},
				{
					number: '02',
					title: 'Diagnose the system',
					text: 'Map workflows, data, dependencies, failure modes, and the responsibility boundary before implementation.',
				},
				{
					number: '03',
					title: 'Agree the engagement',
					text: 'Set scope, acceptance criteria, access, client responsibilities, payment, and the change-request path in writing.',
				},
				{
					number: '04',
					title: 'Deliver with evidence',
					text: 'Work in reviewable slices, demonstrate progress weekly, and surface risks before they become surprises.',
				},
				{
					number: '05',
					title: 'Handoff and improve',
					text: 'Deploy deliberately, document ownership and warranty boundaries, then monitor or retain only where justified.',
				},
			],
		},
		team: {
			kicker: 'Accountable delivery',
			title: 'One co-founder owns the conversation. One technical lead owns each engagement.',
			founderRole: 'Co-founder & Engagement Lead',
			founderSummary:
				'Hamid has been building Moonlancer with friends since 2023 as a side venture. He leads qualification, solution framing, and client accountability, combining React and Next.js interfaces with Rust and Tauri applications for POS, kiosks, payments, and store operations across Linux, Windows, and Android.',
			response: 'Qualification response within one business day.',
			networkTitle: 'Verified delivery network',
			networkIntro:
				'Specialists join according to the agreed scope and confirmed availability. Public profiles describe professional responsibility, not permanent employment status.',
			profileCta: 'View professional profile',
		},
		finalCta: {
			title: 'Start with the system problem.',
			body: 'Describe where the workflow, data, or operation is failing. Moonlancer will determine whether the right next step is a diagnostic, stabilization sprint, delivery engagement, retainer, or no engagement.',
			cta: 'Discuss a system problem',
		},
		footer: {
			statement: 'Retail software that stays connected.',
			description:
				'A founder-led specialist studio for retail, ERP, inventory, POS, payment, reconciliation, reporting, and operational software.',
			language: 'Language',
			privacy: 'Privacy',
			terms: 'Terms',
			contact: 'Contact',
			linkedin: 'Hamid on LinkedIn',
			copyright: 'Moonlancer',
		},
		profile: {
			kicker: 'Delivery network profile',
			responsibility: 'Engagement responsibility',
			systems: 'Relevant system types',
			technical: 'Technical range',
			remit: 'Delivery remit',
			team: 'Back to the team',
			cta: 'Discuss a system problem',
			position: 'Role in the delivery network',
		},
	},
	fa: {
		nav: {
			offers: 'پلتفرم فروشگاهی',
			work: 'نمونه‌کار',
			process: 'فرآیند',
			team: 'تیم',
			cta: 'گفت‌وگو درباره مسئله سیستم',
		},
		headerDescriptor: 'استودیوی سیستم‌های خرده‌فروشی',
		hero: {
			eyebrow: 'خرده‌فروشی سازمانی / POS / پرداخت / خرید اعتباری / کیوسک',
			headline: 'هر فروشگاه.',
			headlineAccent: 'یک سیستم یکپارچه.',
			body: 'پلتفرم اختصاصی خرده‌فروشی شما را طراحی و پیاده‌سازی می‌کنیم؛ از صندوق و سلف‌سرویس تا پرداخت، اعتبار، موجودی و مرکز کنترل همه شعب.',
			primary: 'طراحی پلتفرم فروشگاهی',
			secondary: 'کاوش در نمونه‌کارها',
			note: 'نرم‌افزار اختصاصی و چندسکویی، متناسب با برند و عملیات شما.',
		},
		problems: {
			kicker: 'فشار عملیاتی',
			title: 'وقتی سیستم‌ها اختلاف دارند، عملیات هزینه می‌دهد.',
			intro: 'خطاهای پرهزینه معمولاً در یک صفحه نیستند؛ میان وضعیت تراکنش، رکورد موجودی، دستگاه، تیم و گزارش ظاهر می‌شوند.',
			items: [
				'پرداخت کامل شده اما فاکتور یا رکورد تسویه وجود ندارد.',
				'فروشگاه آنلاین به نظر می‌رسد، اما فروش یا همگام‌سازی بی‌صدا متوقف شده است.',
				'ERP، فروش آنلاین، انبار و گزارش‌گیری وضعیت‌های متفاوتی نشان می‌دهند.',
				'دستگاه POS با ضعیف شدن شبکه از کار می‌افتد.',
				'با رشد داده، گزارش‌های حیاتی کند و غیرقابل اتکا می‌شوند.',
				'مغایرت‌گیری و رسیدگی دستی به استثناها، روز تیم را مصرف می‌کند.',
			],
		},
		outcomes: {
			kicker: 'نتیجه عملیاتی',
			title: 'مسیر حیاتی را قابل مشاهده، کنترل و بازیابی کنید.',
			items: [
				'وضعیت قابل اتکای تراکنش و فاکتور',
				'دید روشن از سلامت فروشگاه و دستگاه',
				'عملیات آفلاین و همگام‌سازی امن‌تر',
				'گزارش‌گیری عملیاتی سریع‌تر',
				'استقرار و بازگشت کنترل‌شده',
				'رسیدگی دستی کمتر به استثناها',
			],
		},
		platform: {
			kicker: 'ساخته‌شده برای عملیات شما',
			title: 'پلتفرم اختصاصی خرده‌فروشی شما؛ نه یک ابزار جداافتاده دیگر.',
			intro: 'خانواده‌ای از محصولات که برای برند، شعب و قواعد عملیاتی شما طراحی می‌شود. از یک نقطه حیاتی شروع می‌کنیم و سپس باقی بخش‌ها را با یک هسته مشترک تجاری به هم متصل می‌کنیم.',
			core: {
				label: 'هسته مشترک تجارت',
				title: 'یک مرجع قابل اتکا برای تمام عملیات.',
				body: 'کاتالوگ، قیمت، هویت، سفارش، وضعیت پرداخت، موجودی، سلامت دستگاه و گزارش‌گیری به‌جای اتصال‌های شکننده، از قراردادهای روشن عبور می‌کنند.',
				stack: ['سرویس‌های Rust', 'اتصال ERP و API', 'همگام‌سازی آفلاین', 'پایش‌پذیری'],
			},
			products: [
				{
					number: '۰۱',
					title: 'صندوق فروشگاهی',
					body: 'صندوقی سریع با هویت برند شما برای صندوقدار، با تداوم آفلاین، پشتیبانی تجهیزات، به‌روزرسانی کنترل‌شده و مسیر بازیابی.',
					platform: 'Linux / Windows / Android',
					features: ['فروش', 'مرجوعی', 'رسید', 'کنترل دستگاه'],
				},
				{
					number: '۰۲',
					title: 'پرداخت، اعتبار و خرید اقساطی',
					body: 'جریان‌های روشن برای مشتری و اپراتور؛ از پرداخت، کیف پول و اعتبار تا اقساط، بازپرداخت، تسویه و مغایرت‌گیری.',
					platform: 'POS / Web / Mobile',
					features: ['وضعیت پرداخت', 'قواعد اعتبار', 'بازپرداخت', 'مغایرت‌گیری'],
				},
				{
					number: '۰۳',
					title: 'کیوسک سلف‌سرویس',
					body: 'سفارش‌گیری و پرداخت لمسی، متناسب با کاتالوگ، نوع فروشگاه، نیازهای دسترس‌پذیری و سخت‌افزار شما.',
					platform: 'Linux / Windows / Android',
					features: ['انتخاب کالا', 'ساخت سفارش', 'پرداخت', 'بازیابی با اپراتور'],
				},
				{
					number: '۰۴',
					title: 'مرکز کنترل عملیات',
					body: 'مرکز کنترل وب برای شعب، دستگاه‌ها، کاتالوگ، قیمت، پروموشن، موجودی، رخدادها و مشاهده روند انتشار.',
					platform: 'Web / Back office',
					features: ['سلامت شعب', 'موجودی', 'انتشار نسخه', 'گزارش‌گیری'],
				},
			],
		},
		offers: {
			kicker: 'همکاری‌های تعریف‌شده',
			title: 'با کوچک‌ترین گام پولی شروع کنید که ابهام را کاهش می‌دهد.',
			intro: 'هر همکاری محدوده مکتوب، معیار پذیرش، یک راهبر پاسخ‌گو و فرآیند مشخص تغییر دارد.',
			items: [
				{
					id: 'systems-diagnostic',
					number: '۰۱',
					title: 'ارزیابی سیستم',
					when: 'یک مسئله عملیاتی یا فنی مهم است، اما علت و محدوده اجرای آن هنوز روشن نیست.',
					duration: '۳ تا ۵ روز کاری',
					deliverable: 'نقشه سیستم، فهرست ریسک، بک‌لاگ اولویت‌بندی‌شده و پیشنهاد هزینه‌دار برای گام بعدی.',
					cta: 'درخواست ارزیابی',
				},
				{
					id: 'stabilization-sprint',
					number: '۰۲',
					title: 'اسپرینت پایدارسازی',
					when: 'یک خرابی محدود در سیستم فعال، ریسک عملیاتی یا مالی ایجاد کرده است.',
					duration: 'حدود ۲ هفته',
					deliverable: 'اصلاح قابل اندازه‌گیری یک مسیر حیاتی همراه با مانیتورینگ، شواهد پذیرش و تحویل مکتوب.',
					cta: 'گفت‌وگو درباره پایدارسازی',
				},
				{
					id: 'product-delivery',
					number: '۰۳',
					title: 'تیم تحویل محصول',
					when: 'یک قابلیت یا اتصال مشخص به تیمی چندتخصصی و پاسخ‌گو نیاز دارد.',
					duration: '۶ تا ۱۲ هفته',
					deliverable: 'قابلیت مستقرشده با نمایش هفتگی، محدوده کنترل‌شده، معیار پذیرش و برنامه تحویل.',
					cta: 'گفت‌وگو درباره تحویل محصول',
				},
				{
					id: 'operations-retainer',
					number: '۰۴',
					title: 'پشتیبانی عملیات',
					when: 'یک سیستم تحویل‌شده یا به‌ارث‌رسیده به ظرفیت مستمر برای پایداری و بهبود نیاز دارد.',
					duration: 'مستمر، پس از بررسی سیستم',
					deliverable: 'مانیتورینگ، پاسخ محدود به رخداد، کارهای پایداری، بهبودهای کوچک و گزارش ماهانه ریسک.',
					cta: 'گفت‌وگو درباره پشتیبانی',
				},
			],
		},
		work: {
			kicker: 'شواهد، نه گالری',
			title: 'مطالعه موردی فقط پس از تأیید شواهد منتشر می‌شود.',
			intro: 'سه مطالعه موردی ناشناس در حال آماده‌سازی است. تا زمانی که واقعیت‌ها و مستندات اجازه انتشار نگیرند، Moonlancer الگوهای فرضی را به‌عنوان نتیجه مشتری نمایش نمی‌دهد.',
			pendingLabel: 'در انتظار تأیید انتشار',
			pendingThemes: [
				{
					title: 'پایداری پرداخت و فاکتور',
					description: 'وضعیت تراکنش، فاکتور، برگشت، تسویه و مغایرت‌گیری.',
				},
				{
					title: 'سلامت فروشگاه و تشخیص ناهنجاری',
					description: 'سیگنال‌های فروشگاه، POS، همگام‌سازی، فروش صفر و گزارش‌گیری.',
				},
				{
					title: 'عملیات آفلاین POS',
					description: 'دستگاه، همگام‌سازی، استقرار، به‌روزرسانی، پشتیبان و دید رخداد.',
				},
			],
			labels: {
				context: 'زمینه',
				problem: 'مسئله',
				responsibility: 'مسئولیت',
				result: 'نتیجه',
				read: 'مطالعه موردی',
			},
		},
		domains: {
			kicker: 'شناخت حوزه',
			title: 'سیستم‌هایی که تیم در بستر واقعی عملیات می‌شناسد.',
			items: [
				'عملیات خرده‌فروشی و چندفروشگاهی',
				'اتصال ERP و موجودی',
				'POS و سیستم‌های آفلاین‌محور',
				'پرداخت، کیف پول، فاکتور و مغایرت‌گیری',
				'فروش آنلاین و عملیات ارسال',
				'گزارش‌گیری، مشاهده‌پذیری و جریان داده',
			],
		},
		process: {
			kicker: 'مسیر تحویل',
			title: 'شواهد هفتگی، تصمیم روشن و تغییر کنترل‌شده.',
			items: [
				{
					number: '۰۱',
					title: 'ارزیابی اولیه مسئله',
					text: 'خریدار، اثر عملیاتی، فوریت، دسترسی لازم و تناسب Moonlancer با مسئله را بررسی می‌کنیم.',
				},
				{
					number: '۰۲',
					title: 'شناخت سیستم',
					text: 'فرآیند، داده، وابستگی، حالت خطا و مرز مسئولیت را پیش از اجرا مشخص می‌کنیم.',
				},
				{
					number: '۰۳',
					title: 'توافق روی همکاری',
					text: 'محدوده، معیار پذیرش، دسترسی، مسئولیت مشتری، پرداخت و مسیر تغییر را مکتوب می‌کنیم.',
				},
				{
					number: '۰۴',
					title: 'تحویل همراه با شواهد',
					text: 'کار را در بخش‌های قابل بازبینی جلو می‌بریم، هفتگی نمایش می‌دهیم و ریسک را زود آشکار می‌کنیم.',
				},
				{
					number: '۰۵',
					title: 'تحویل نهایی و بهبود',
					text: 'با برنامه مستقر می‌کنیم، مالکیت و مرز ضمانت را مستند می‌کنیم و فقط در صورت توجیه، مانیتور یا پشتیبانی را ادامه می‌دهیم.',
				},
			],
		},
		team: {
			kicker: 'تحویل پاسخ‌گو',
			title: 'یک هم‌بنیان‌گذار مسئول گفت‌وگوست؛ هر همکاری یک راهبر فنی مشخص دارد.',
			founderRole: 'هم‌بنیان‌گذار و راهبر همکاری',
			founderSummary:
				'حمید از سال ۲۰۲۳ Moonlancer را همراه دوستانش به‌عنوان یک مسیر جانبی ساخته است. او ارزیابی اولیه، صورت‌بندی راه‌حل و پاسخ‌گویی به مشتری را هدایت می‌کند و رابط‌های React و Next.js را با اپلیکیشن‌های Rust و Tauri برای POS، کیوسک، پرداخت و عملیات فروشگاه روی Linux، Windows و Android ترکیب می‌کند.',
			response: 'پاسخ ارزیابی اولیه حداکثر طی یک روز کاری.',
			networkTitle: 'شبکه تأییدشده تحویل',
			networkIntro:
				'متخصصان بر اساس محدوده توافق‌شده و ظرفیت تأییدشده به همکاری می‌پیوندند. پروفایل‌ها مسئولیت حرفه‌ای را توصیف می‌کنند، نه استخدام دائمی را.',
			profileCta: 'مشاهده پروفایل حرفه‌ای',
		},
		finalCta: {
			title: 'از مسئله سیستم شروع کنید.',
			body: 'توضیح دهید فرآیند، داده یا عملیات کجا شکست می‌خورد. Moonlancer مشخص می‌کند گام درست ارزیابی، پایدارسازی، تحویل محصول، پشتیبانی یا عدم همکاری است.',
			cta: 'گفت‌وگو درباره مسئله سیستم',
		},
		footer: {
			statement: 'نرم‌افزار فروشگاهی که متصل می‌ماند.',
			description:
				'استودیویی تخصصی و بنیان‌گذارمحور برای سیستم‌های فروش، ERP، موجودی، POS، پرداخت، مغایرت‌گیری، گزارش و عملیات.',
			language: 'زبان',
			privacy: 'حریم خصوصی',
			terms: 'شرایط استفاده',
			contact: 'تماس',
			linkedin: 'پروفایل حمید در LinkedIn',
			copyright: 'Moonlancer',
		},
		profile: {
			kicker: 'پروفایل شبکه تحویل',
			responsibility: 'مسئولیت در همکاری',
			systems: 'سیستم‌های مرتبط',
			technical: 'دامنه فنی',
			remit: 'تعهد تحویل',
			team: 'بازگشت به تیم',
			cta: 'گفت‌وگو درباره مسئله سیستم',
			position: 'نقش در شبکه تحویل',
		},
	},
} as const satisfies Record<Locale, object>;

export function getSiteCopy(locale: Locale) {
	return siteCopy[locale];
}
