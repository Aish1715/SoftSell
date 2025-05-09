import { FaShieldAlt, FaBolt, FaUsers, FaTags } from "react-icons/fa";

export default function WhyChooseUs({ theme }) {
  const sectionTheme = theme.sections.whyChooseUs;

  const features = [
    { icon: <FaUsers size={28} />, title: "Trusted by 1,000+ Clients", desc: "Serving individuals and enterprises alike." },
    { icon: <FaBolt size={28} />, title: "Fast Payouts", desc: "Get your money in record time." },
    { icon: <FaShieldAlt size={28} />, title: "Secure Transfers", desc: "We ensure all licenses are handled legally and safely." },
    { icon: <FaTags size={28} />, title: "Best Market Rates", desc: "We maximize your return on every license." },
  ];

  return (
    <section
      className="py-16 text-center transition-all"
      style={{
        background: sectionTheme.background,
        color: sectionTheme.text
      }}
    >
      <h2 className="text-3xl font-bold mb-10" style={{color:sectionTheme.blocktitle}}>Why Choose Us</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-lg shadow hover:shadow-lg transition"
            style={{ background: sectionTheme.cardBackground }}
          >
            <div className="text-blue-600 mb-3 flex justify-center" style={{ color: sectionTheme.iconColor }}>
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
