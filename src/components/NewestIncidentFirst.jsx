import React, { useEffect, useState } from 'react';

function NewestIncidentFirst() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetch('/incidents.json')
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => new Date(b.reported_at) - new Date(a.reported_at));
        setIncidents(sorted);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Newest Incidents First</h1>
      <p className="text-gray-600 mb-8">Showing all incidents sorted by most recent report date.</p>
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Incident</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported At</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {incidents.map((incident) => (
              <tr key={incident.id}>
                <td className="px-6 py-4 whitespace-nowrap">{incident.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{incident.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{incident.severity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(incident.reported_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewestIncidentFirst;
