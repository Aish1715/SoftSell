export default function Testimonials({ theme }) {
  const sectionTheme = theme.sections.testimonials;

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Manager",
      company: "TechNova Inc.",
      message: "SoftSell made it incredibly easy to resell our unused licenses. The process was smooth and fast!",
    },
    {
      name: "Raj Patel",
      role: "Founder",
      company: "CloudCore Solutions",
      message: "I was skeptical at first, but SoftSell exceeded expectations. Got paid within 24 hours.",
    },
  ];

  return (
    <section
      className="py-16 text-center transition-all"
      style={{
        background: sectionTheme.background,
        color: sectionTheme.text
      }}
    >
      <h2 className="text-3xl font-bold mb-10" style={{color:sectionTheme.blocktitle}}>What Our Customers Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 rounded-lg border shadow-sm bg-gray-50"
            style={{ background: sectionTheme.cardBackground}}
          >
            <p className="text-gray-700 italic">“{t.message}”</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-600">{t.role}, {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
