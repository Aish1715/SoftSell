import { FaUpload, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

export default function HowItWorks({ theme }) {
  // Access the howItWorks section theme from the passed prop
  const sectionTheme = theme.sections.howItWorks;

  const steps = [
    { icon: <FaUpload size={32} />, title: "Upload License", desc: "Send us your unused software licenses." },
    { icon: <FaChartLine size={32} />, title: "Get Valuation", desc: "We'll assess the resale value quickly." },
    { icon: <FaMoneyBillWave size={32} />, title: "Get Paid", desc: "Receive instant payout once accepted." },
  ];

  return (
    <section
      className="py-16 text-center transition-all"
      style={{
        background: sectionTheme.background,
        color: sectionTheme.text
      }}
    >
      <h2 className="text-3xl font-bold mb-10" style={{color:sectionTheme.blocktitle}}>How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition"
            style={{ background: sectionTheme.cardBackground }}
          >
            <div className="mb-4 flex justify-center" style={{ color: sectionTheme.iconColor }}>
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: sectionTheme.cardText }}>
              {step.title}
            </h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
