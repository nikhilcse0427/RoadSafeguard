import React from "react";
import { ShieldCheck, MapPin, Users } from "lucide-react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-tight leading-tight">
          Welcome to <span className="text-blue-600">RoadSafeguard</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering communities to make roads safer, one report at a time.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-200 text-center hover:-translate-y-2">
          <ShieldCheck className="mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform" size={50} />
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            A community-powered platform dedicated to revolutionizing road safety through smart reporting.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-200 text-center hover:-translate-y-2">
          <MapPin className="mx-auto mb-6 text-green-600 group-hover:scale-110 transition-transform" size={50} />
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Using real-time data and community engagement to drive smarter, faster road safety improvements.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-200 text-center hover:-translate-y-2">
          <Users className="mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-transform" size={50} />
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Get Involved</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Become a road safety ambassador by reporting hazards and making a real difference in your community.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-20 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">How It Works</h2>
        <div className="space-y-8 text-gray-700 text-base">
          {[
            { number: "1.", color: "blue-600", text: "Easily report road incidents and hazards through our platform." },
            { number: "2.", color: "green-600", text: "Hazards are categorized by severity and location automatically." },
            { number: "3.", color: "purple-600", text: "Authorities use real-time reports to prioritize responses." },
            { number: "4.", color: "pink-600", text: "Track the status of reported hazards transparently." },
          ].map((step, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className={`text-${step.color} font-bold text-xl`}>{step.number}</span>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Drive Change?
        </h2>
        <p className="text-gray-600 mb-8">
          Start reporting today. Together, we ensure safer journeys for all.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition">
          Report Now
        </button>
      </div>

    </div>
  );
}

export default About;
