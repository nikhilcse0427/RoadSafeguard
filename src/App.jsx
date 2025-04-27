import './App.css'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import About from './components/About'
import HighSeverity from './components/HighSeverity'
import MediumSeverity from './components/MediumSeverity'
import LowSeverity from './components/LowSeverity'
import NewestIncidentFirst from './components/NewestIncidentFirst'
import OldestIncidentFirst from './components/OldestIncidentFirst'
import ReportIncident from './components/ReportIncident'
import AllSeverity from './components/AllSeverity'
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList, Cell } from 'recharts';

const severityBarColors = {
  High: '#ef4444',    // Tailwind red-500
  Medium: '#f59e42',  // Tailwind orange-400
  Low: '#22c55e',     // Tailwind green-500
};

function App() {
  // Dashboard chart state
  const [severityData, setSeverityData] = useState([
    { severity: 'High', count: 0 },
    { severity: 'Medium', count: 0 },
    { severity: 'Low', count: 0 },
  ]);
  const [recentIncidents, setRecentIncidents] = useState([]);
  const [expandedIncident, setExpandedIncident] = useState(null);

  useEffect(() => {
    fetch('/incidents.json')
      .then(res => res.json())
      .then(data => {
        const counts = { High: 0, Medium: 0, Low: 0 };
        data.forEach(inc => {
          if (counts[inc.severity] !== undefined) {
            counts[inc.severity]++;
          }
        });
        setSeverityData([
          { severity: 'High', count: counts.High },
          { severity: 'Medium', count: counts.Medium },
          { severity: 'Low', count: counts.Low },
        ]);
        // Sort by reported_at descending and take 3 most recent
        const sorted = [...data].sort((a, b) => new Date(b.reported_at) - new Date(a.reported_at));
        setRecentIncidents(sorted.slice(0, 3));

        // Log invalid dates
        sorted.forEach(incident => {
          if (isNaN(new Date(incident.reported_at))) {
            console.warn('Invalid date for incident:', incident);
          }
        });
      });
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10 py-4 px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-blue-700">
              <span className="text-red-800 typing-effect font-mono text-2xl">RoadSafeguard</span>
            </h1>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                RS
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <Routes>
              <Route path="/" element={
                <div className="space-y-8">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to RoadSafeguard</h1>
                    <p className="text-gray-600">
                      A comprehensive platform for reporting and tracking road incidents to improve community safety.
                    </p>
                  </div>

                  {/* Stat Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-red-100 text-red-600 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">High Severity</p>
                          <p className="text-2xl font-semibold text-gray-800">{severityData.find(s => s.severity === 'High')?.count ?? 0}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-orange-100 text-orange-600 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Medium Severity</p>
                          <p className="text-2xl font-semibold text-gray-800">{severityData.find(s => s.severity === 'Medium')?.count ?? 0}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Low Severity</p>
                          <p className="text-2xl font-semibold text-gray-800">{severityData.find(s => s.severity === 'Low')?.count ?? 0}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total Reports</p>
                          <p className="text-2xl font-semibold text-gray-800">{severityData.reduce((sum, s) => sum + s.count, 0)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Graph and Recent Accidents Row */}
                  <div className="flex flex-col md:flex-row gap-6 mt-8">
                    {/* Bar Chart */}
                    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl p-8 shadow-lg w-full md:w-1/2 flex flex-col items-center border border-blue-100">
                      <h2 className="text-base font-semibold text-blue-700 mb-2">Incidents by Severity</h2>
                      <ResponsiveContainer width="100%" height={280} minWidth={220}>
                        <BarChart data={severityData} barSize={40}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="severity" className="text-xs font-medium" axisLine={false} tickLine={false} />
                          <YAxis allowDecimals={false} className="text-xs" axisLine={false} tickLine={false} />
                          <Tooltip wrapperClassName="!rounded-lg !shadow-lg !bg-white" cursor={{ fill: '#e0e7ef' }} />
                          <Bar dataKey="count" radius={[12, 12, 0, 0]}>
                            {severityData.map((entry, idx) => (
                              <Cell key={`cell-${idx}`} fill={severityBarColors[entry.severity]} />
                            ))}
                            <LabelList dataKey="count" position="top" className="fill-blue-700 font-bold text-xs" />
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    {/* Recent Accidents Card */}
                    <div className="bg-white rounded-xl shadow p-6 w-full md:w-1/2 flex flex-col justify-between">
                      <h2 className="text-base font-semibold text-blue-700 mb-4">Recent Accidents</h2>
                      <ul className="space-y-4">
                        {recentIncidents.map((incident) => (
                          <li key={incident.id} className="flex flex-col gap-1 border-b last:border-b-0 pb-3 last:pb-0">
                            <span className="font-semibold text-gray-800 truncate">{incident.title}</span>
                            <span className={`inline-block text-xs font-bold rounded px-2 py-0.5 mt-1 mb-1 w-fit
                              ${incident.severity === 'High' ? 'bg-red-100 text-red-700' : incident.severity === 'Medium' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>{incident.severity}</span>
                            <span className="text-xs text-gray-500">
                              {isNaN(new Date(incident.reported_at)) ? "N/A" : new Date(incident.reported_at).toLocaleDateString()}
                            </span>
                            <button
                              className="text-blue-600 hover:underline text-xs mt-1 self-start"
                              onClick={() => setExpandedIncident(expandedIncident === incident.id ? null : incident.id)}
                            >
                              {expandedIncident === incident.id ? 'Hide Details' : 'View Details'}
                            </button>
                            {expandedIncident === incident.id && (
                              <div className="mt-2 text-gray-700 text-sm bg-blue-50 rounded p-2 border border-blue-100">
                                {incident.description}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/high-severity" element={<HighSeverity />} />
              <Route path="/medium-severity" element={<MediumSeverity />} />
              <Route path="/low-severity" element={<LowSeverity />} />
              <Route path="/newest-first" element={<NewestIncidentFirst />} />
              <Route path="/oldest-first" element={<OldestIncidentFirst />} />
              <Route path="/report" element={<ReportIncident />} />
              <Route path="/all-severity" element={<AllSeverity />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
