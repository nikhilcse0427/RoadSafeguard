import React, { useEffect, useState } from 'react';

function OldestIncidentFirst() {
  const [incidents, setIncidents] = useState([]);
  const [expandedIncident, setExpandedIncident] = useState(null);

  useEffect(() => {
    fetch('/incidents.json')
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => new Date(a.reported_at) - new Date(b.reported_at));
        setIncidents(sorted);
      });
  }, []);

  const severityBadge = (severity) => {
    if (severity === 'High') return 'bg-red-100 text-red-700';
    if (severity === 'Medium') return 'bg-orange-100 text-orange-700';
    if (severity === 'Low') return 'bg-green-100 text-green-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Oldest Incidents First</h1>
      <p className="text-gray-600 mb-8">Showing all incidents sorted by oldest report date first.</p>
      <div className="bg-white shadow-xl overflow-hidden rounded-2xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Severity</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Reported At</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {incidents.map((incident) => (
              <React.Fragment key={incident.id}>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{incident.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${severityBadge(incident.severity)}`}>{incident.severity}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{new Date(incident.reported_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="text-xs font-semibold px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                      onClick={() => setExpandedIncident(expandedIncident === incident.id ? null : incident.id)}
                    >
                      {expandedIncident === incident.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </td>
                </tr>
                {expandedIncident === incident.id && (
                  <tr>
                    <td colSpan={4} className="px-8 pb-4 pt-2 text-gray-700 text-sm">
                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 shadow-inner animate-fadeIn">
                        {incident.description}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OldestIncidentFirst;
