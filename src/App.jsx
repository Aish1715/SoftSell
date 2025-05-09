import { useState, useEffect } from "react";
import { themes } from "./Themes.js";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import logo from "./assets/logo.jpg";

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.light);

  useEffect(() => {
    document.body.style.background = selectedTheme.background;
    document.body.style.color = selectedTheme.text;
  }, [selectedTheme]);

  return (
    <div className="min-h-screen p-6 transition-all" style={{ background: selectedTheme.background, color: selectedTheme.text }}>
      <header className="text-center py-10 relative"
        style={{ backgroundImage: "url('./assets/bg.avif')" }}>
        <img
          src={logo}
          alt="SoftSell Logo"
          className="mx-auto mb-4 w-24 h-24 rounded-full shadow-md"
        />
        <h1 className="text-4xl font-bold">Welcome to SoftSell</h1>
        <p className="mt-4 text-lg">Sell unused software licenses in just a few clicks.</p>
        <button
          className="mt-6 px-6 py-2 rounded-md"
          style={{ backgroundColor: selectedTheme.accent, color: selectedTheme.buttonTextColor}}
        >
          Get a Quote
        </button>

        {/* Theme Selector Dropdown */}
        <div className="absolute top-4 right-4">
        <select
            value={selectedTheme.name}
            onChange={(e) => {
              const selected = Object.values(themes).find(
                (theme) => theme.name === e.target.value
              );
              setSelectedTheme(selected);
            }}
            className="block w-10 h-10 rounded-full bg-white text-white overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition"
            style={{
              backgroundColor: selectedTheme.accent,
              backgroundImage: "none",
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              textIndent: "-9999px", 
            }}
          >
            {Object.values(themes).map((theme) => (
              <option
                key={theme.name}
                value={theme.name}
                style={{ color: "#000" }} 
              >
                {theme.name}
              </option>
            ))}
          </select>

        </div>
      </header>

      <HowItWorks theme={selectedTheme}/>
      <WhyChooseUs theme={selectedTheme}/>
      <Testimonials theme={selectedTheme}/>
      <ContactForm theme={selectedTheme}/>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 text-white p-3 rounded-full shadow-lg transition"
        style={{ backgroundColor: selectedTheme.accentHover }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}
