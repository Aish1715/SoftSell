import { useState } from "react";

export default function ContactForm({ theme }) {
  const sectionTheme = theme.sections.contactForm;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const licenseOptions = ["Windows", "Office 365", "Adobe", "Other"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Required";
    if (!formData.email || !formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.company) newErrors.company = "Required";
    if (!formData.license) newErrors.license = "Select one";
    if (!formData.message) newErrors.message = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted (demo only)");
      setFormData({ name: "", email: "", company: "", license: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section
      className="py-16 text-center transition-all"
      style={{
        background: sectionTheme.background,
        color: sectionTheme.text
      }}
    >
      <h2 className="text-3xl font-bold mb-100" style={{color:sectionTheme.blocktitle}}>Get in Touch</h2> <br></br>
      <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-xl space-y-6 text-left">
        {["name", "email", "company"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-semibold text-gray-700 capitalize">{field}</label>
            <input
              name={field}
              type={field === "email" ? "email" : "text"}
              value={formData[field]}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              style={{
                backgroundColor: sectionTheme.background,
                color: sectionTheme.text
              }}
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        <div>
          <label className="block text-sm font-semibold text-gray-700">License Type</label>
          <select
            name="license"
            value={formData.license}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            style={{
              backgroundColor: sectionTheme.background,
              color: sectionTheme.blocktitle
            }}
          >
            <option value="">Select License</option>
            {licenseOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.license && <p className="text-red-500 text-sm">{errors.license}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full mt-1 p-2 border rounded"
            style={{
              backgroundColor: sectionTheme.background,
              color: sectionTheme.text
            }}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          style={{
            backgroundColor: sectionTheme.background,
            color: sectionTheme.blocktitle}}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
