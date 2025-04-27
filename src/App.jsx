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

function App() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10 py-4 px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">RoadSafeguard Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </button>
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
                          <p className="text-2xl font-semibold text-gray-800">3</p>
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
                          <p className="text-2xl font-semibold text-gray-800">4</p>
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
                          <p className="text-2xl font-semibold text-gray-800">5</p>
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
                          <p className="text-2xl font-semibold text-gray-800">12</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Incidents</h2>
                    <div className="bg-white overflow-hidden rounded-lg border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Incident</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Major pothole</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Main St & 5th Ave</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">High</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Open</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Faded road markings</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Highway 101, mile 24</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">Medium</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Open</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Minor sidewalk cracks</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cedar Lane</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Low</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Open</td>
                          </tr>
                        </tbody>
                      </table>
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
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
