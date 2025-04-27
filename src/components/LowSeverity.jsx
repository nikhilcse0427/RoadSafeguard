import React, { useEffect, useState } from 'react';

function LowSeverity() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetch('/incidents.json')
      .then(res => res.json())
      .then(data => {
        setIncidents(data.filter(i => i.severity === 'Low'));
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Low Severity Incidents</h1>
      <p className="text-gray-600 mb-8">Showing non-urgent incidents that can be addressed during routine maintenance.</p>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <span className="text-green-500">ℹ️</span>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              Low severity incidents are not immediate safety concerns but should be addressed to maintain road quality and appearance.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Incident</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported At</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {incidents.map((incident) => (
              <tr key={incident.id}>
                <td className="px-6 py-4 whitespace-nowrap">{incident.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{incident.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(incident.reported_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LowSeverity;
