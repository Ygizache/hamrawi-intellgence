export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-900 to-purple-700 text-white py-28 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-bold tracking-tight">Hamrawi Intelligence</h1>
          <p className="mt-6 text-xl leading-relaxed">
            Engineering Intelligent Solutions through AI, Automation, and Modern Web Technologies.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-purple-900 hover:bg-gray-100"
            >
              Request a Consultation
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-purple-900">Services</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
            Practical, high-quality solutions built with a consulting mindset and engineered for scale.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">AI Automation</h3>
              <p className="mt-3 text-gray-600">
                Automate workflows, customer support, and internal operations using AI-first systems.
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p className="mt-3 text-gray-600">
                Modern websites and landing pages built for performance, security, and credibility.
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">Business Intelligence</h3>
              <p className="mt-3 text-gray-600">
                Dashboards and analytics that turn data into decisions, strategy, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-purple-900">About</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Hamrawi Intelligence is inspired by the meaning of “Hamrawi” (ሐምራዊ) — purple — a color created
            by combining red (ambition) and blue (logic). That fusion represents how we work: disciplined
            engineering paired with creative problem-solving to deliver intelligent systems.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-purple-900">Contact</h2>
          <p className="mt-4 text-lg text-gray-600">
            Want to work together? Send a message and I’ll reply within 24–48 hours.
          </p>

          <div className="mt-10 rounded-xl border p-6 text-left shadow-sm">
            <p className="font-semibold">Email</p>
            <p className="text-gray-700">hello@hamrawiintelligence.com (set up after launch)</p>

            <p className="mt-6 font-semibold">For now</p>
            <p className="text-gray-700">
              Use your personal email in the contact button or add a simple form later.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-8 text-center text-white">
        © {new Date().getFullYear()} Hamrawi Intelligence. All rights reserved.
      </footer>
    </main>
  );
}