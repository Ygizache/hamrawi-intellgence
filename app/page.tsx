export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Hamrawi Intelligence
          </h1>
          <p className="text-xl mb-8">
            AI Solutions That Save Time, Increase Revenue, and Automate Growth.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-purple-800 px-6 py-3 rounded-lg font-semibold">
              Get Free Consultation
            </button>
            <button className="border border-white px-6 py-3 rounded-lg">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            Practical AI and automation solutions built for real business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Resume Optimization</h3>
            <p>
              Optimize resumes using AI-driven keyword analysis to pass ATS systems and improve interview chances.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Business Automation</h3>
            <p>
              Automate workflows, scheduling, CRM, and internal processes to reduce manual work and increase efficiency.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Chatbot Setup</h3>
            <p>
              Custom chatbots for websites and messaging platforms to capture leads and support customers 24/7.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
            <p>
              Transform business data into dashboards and actionable insights for smarter decision making.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Website + AI Integration</h3>
            <p>
              Modern websites integrated with AI APIs, automation tools, and performance optimization.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}