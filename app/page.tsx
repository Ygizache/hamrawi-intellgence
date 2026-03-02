const services = [
  {
    title: "AI Resume Optimization",
    desc: "ATS-ready resumes, role targeting, keyword alignment, and clean formatting that gets interviews.",
    bullets: ["ATS + keyword tuning", "Role-tailored versions", "LinkedIn headline + summary"],
    tag: "Career",
  },
  {
    title: "Small Business Automation",
    desc: "Automate scheduling, email workflows, CRM updates, and repetitive tasks so you save hours every week.",
    bullets: ["Zapier/Make workflows", "CRM + email automation", "Forms → spreadsheet → alerts"],
    tag: "Business",
  },
  {
    title: "Chatbot Setup",
    desc: "24/7 lead capture and customer support chatbots for your website or messaging channels.",
    bullets: ["Website chatbot", "FAQ + lead capture", "Human handoff + inbox"],
    tag: "Business",
  },
  {
    title: "Data Analysis & Dashboards",
    desc: "Turn spreadsheets into clear dashboards and insights for smarter decisions and growth tracking.",
    bullets: ["KPI dashboard", "Sales/ops reporting", "Forecasting basics"],
    tag: "Business",
  },
  {
    title: "Website + AI Integration",
    desc: "Modern websites with AI features (forms, chat, automation, analytics) built for performance and credibility.",
    bullets: ["Next.js website", "AI tools integration", "SEO + speed basics"],
    tag: "Product",
  },
];

const packages = [
  {
    name: "Starter",
    price: "$99–$199",
    forWho: "Individuals / Students",
    bullets: ["Resume refresh (ATS)", "1 target role version", "LinkedIn quick optimize"],
    cta: "Book Career Help",
  },
  {
    name: "Growth",
    price: "$299–$799",
    forWho: "Small Businesses",
    bullets: ["Automation setup (1–3 flows)", "Chatbot basic setup", "Simple analytics dashboard"],
    cta: "Book Business Call",
    featured: true,
  },
  {
    name: "Build",
    price: "$999+",
    forWho: "Startups / Products",
    bullets: ["Website build + deployment", "AI integration plan", "Scaling-ready structure"],
    cta: "Start a Project",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-600" />
            <div className="leading-tight">
              <div className="font-bold">Hamrawi Intelligence</div>
              <div className="text-xs text-gray-500">AI • Automation • Web</div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a className="hover:text-purple-700" href="#services">Services</a>
            <a className="hover:text-purple-700" href="#solutions">Solutions</a>
            <a className="hover:text-purple-700" href="#pricing">Pricing</a>
            <a className="hover:text-purple-700" href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-800"
          >
            Free Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Now accepting new clients
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              Engineering Intelligent Growth with AI.
            </h1>

            <p className="mt-6 text-lg text-white/80 md:text-xl">
              We help professionals, small businesses, and startups use AI, automation, and modern web systems
              to save time, improve results, and scale with confidence.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-purple-900 hover:bg-gray-100"
              >
                Request a Free Consultation
              </a>
              <a
                href="#services"
                className="rounded-lg border border-white/30 px-6 py-3 text-center font-semibold hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4">
                <div className="font-semibold text-white">Career AI</div>
                <div>Resume + LinkedIn + targeting</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="font-semibold text-white">Business Automation</div>
                <div>Chatbots + workflows + dashboards</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="font-semibold text-white">Web + AI Products</div>
                <div>Modern sites with AI integration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Clear, practical offerings—built to deliver measurable results.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-800">
                    {s.tag}
                  </span>
                </div>
                <p className="mt-3 text-gray-600">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8">
              <h3 className="text-2xl font-bold text-purple-900">For Professionals</h3>
              <p className="mt-3 text-gray-600">
                Get interview-ready with an ATS-optimized resume and a LinkedIn profile that matches your target roles.
              </p>
              <div className="mt-6 text-sm text-gray-700">
                Typical deliverables: Resume rewrite • 1–2 tailored versions • LinkedIn upgrade • Keyword strategy
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-8">
              <h3 className="text-2xl font-bold text-purple-900">For Small Businesses</h3>
              <p className="mt-3 text-gray-600">
                Automate customer inquiries, scheduling, and reporting so your team focuses on high-value work.
              </p>
              <div className="mt-6 text-sm text-gray-700">
                Typical deliverables: Chatbot • Workflow automation • KPI dashboard • Simple analytics
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-8 lg:col-span-2">
              <h3 className="text-2xl font-bold text-purple-900">For Startups & Products</h3>
              <p className="mt-3 text-gray-600">
                Build a modern website and integrate AI features (chat, automation, data flows) with a clean architecture
                that can scale.
              </p>
              <div className="mt-6 text-sm text-gray-700">
                Typical deliverables: Next.js website • Vercel deployment • AI integration plan • SEO + performance basics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Packages</h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Transparent starting ranges. Final quote depends on scope and timeline.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={[
                  "rounded-2xl border p-8 shadow-sm",
                  p.featured ? "border-purple-300 ring-2 ring-purple-200" : "",
                ].join(" ")}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  {p.featured && (
                    <span className="rounded-full bg-purple-700 px-3 py-1 text-xs font-semibold text-white">
                      Popular
                    </span>
                  )}
                </div>
                <div className="mt-2 text-3xl font-extrabold text-purple-900">{p.price}</div>
                <div className="mt-2 text-sm text-gray-600">{p.forWho}</div>

                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={[
                    "mt-8 block rounded-lg px-5 py-3 text-center font-semibold",
                    p.featured
                      ? "bg-purple-700 text-white hover:bg-purple-800"
                      : "border border-gray-300 hover:bg-gray-50",
                  ].join(" ")}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="mt-4 text-gray-600">
                Tell us what you need and we’ll reply with next steps. (When your domain activates, we’ll set up
                hello@hamrawiintelligence.com.)
              </p>

              <div className="mt-8 rounded-2xl border bg-white p-6">
                <div className="text-sm font-semibold text-gray-900">Fastest way</div>
                <p className="mt-2 text-gray-700">
                  Email: <span className="font-semibold">yihunesisay323@gmail.com</span> (temporary)
                </p>
                <p className="mt-2 text-gray-700">
                  Business email coming soon: <span className="font-semibold">hello@hamrawiintelligence.com</span>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-8">
              <h3 className="text-xl font-bold">Send a message</h3>
              <p className="mt-2 text-sm text-gray-600">
                This button opens your email app (we’ll add a real form later).
              </p>

              <a
                className="mt-6 block rounded-lg bg-purple-700 px-6 py-3 text-center font-semibold text-white hover:bg-purple-800"
                href={`mailto:yihunesisay323@gmail.com?subject=Hamrawi%20Intelligence%20Consultation&body=Hi%20Hamrawi%20Intelligence,%0A%0AI%20need%20help%20with:%20%0A%0AProject%20type%20(Career%20/%20Business%20/%20Website%20+%20AI):%0ABudget%20range:%0ATimeline:%0ABest%20contact%20info:%0A%0AThanks!`}
              >
                Email Hamrawi Intelligence
              </a>

              <div className="mt-6 text-xs text-gray-500">
                Tip: Later we’ll replace this with a secure contact form + auto email notifications.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Hamrawi Intelligence. All rights reserved.</div>
          <div className="text-gray-500">
            “Hamrawi” (ሐምራዊ) = Purple — the fusion of ambition (red) and logic (blue).
          </div>
        </div>
      </footer>
    </main>
  );
}