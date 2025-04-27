import React, { useState } from "react";

function ReportIncident() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    severity: "medium",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Incident reported successfully!");
  };

  const resetForm = () => {
    setFormData({
      title: "",
      location: "",
      severity: "medium",
      description: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-2 space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Report Road Incident</h2>
          <p className="text-gray-500 mt-1 text-sm">
            Help improve road safety by reporting incidents or hazards.
          </p>
        </div>
        <button
          type="button"
          onClick={resetForm}
          className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition"
        >
          Reset Form
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left (Form Fields) */}
        <div className="md:col-span-2 bg-white shadow-xl border border-gray-200 rounded-2xl p-8 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Incident Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Incident Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="E.g., Pothole on Main Street"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-800"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="E.g., Intersection of Main St and Oak Ave"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-800"
              />
            </div>

            {/* Severity */}
            <div>
              <label htmlFor="severity" className="block text-sm font-semibold text-gray-700 mb-2">
                Severity
              </label>
              <select
                id="severity"
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-800"
              >
                <option value="low">Low - Minor issue</option>
                <option value="medium">Medium - Moderate hazard</option>
                <option value="high">High - Dangerous situation</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                required
                value={formData.description}
                onChange={handleChange}
                placeholder="Please provide details about the incident..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-800 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="">
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>

        {/* Right (Instructions) */}
        <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-8 space-y-8">
          {/* Reporting Guidelines */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reporting Guidelines</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              {[
                "Be specific about the location.",
                "Choose the appropriate severity level.",
                "Include relevant details in the description.",
                "Report only one incident per submission.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="flex-shrink-0 h-2.5 w-2.5 rounded-full bg-blue-500 mt-1"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Severity Levels */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Severity Levels</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <span><b>High:</b> Immediate safety risk</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <span><b>Medium:</b> Potential hazard</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <span><b>Low:</b> Minor issue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportIncident;
