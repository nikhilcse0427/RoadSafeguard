import React from 'react'

function MediumSeverity() {
  // This would normally fetch data from an API
  const mockIncidents = [
    { id: 1, title: "Faded road markings", location: "Highway 101, mile 24", reportDate: "2023-04-19", status: "Open" },
    { id: 2, title: "Missing street sign", location: "Elm St & Maple Ave", reportDate: "2023-04-17", status: "In Progress" },
    { id: 3, title: "Road surface cracking", location: "Central Park Road", reportDate: "2023-04-15", status: "Open" },
    { id: 4, title: "Malfunctioning traffic light", location: "Downtown Square", reportDate: "2023-04-14", status: "Scheduled" }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Medium Severity Incidents</h1>
      <p className="text-gray-600 mb-8">Showing incidents that require attention but are not immediately hazardous.</p>

      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <span className="text-orange-500">⚠️</span>
          </div>
          <div className="ml-3">
            <p className="text-sm text-orange-700">
              Medium severity incidents should be addressed to prevent deterioration into more serious issues.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Incident
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Report Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockIncidents.map((incident) => (
              <tr key={incident.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{incident.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{incident.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{incident.reportDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                    {incident.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MediumSeverity
