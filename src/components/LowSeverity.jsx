import React from 'react'

function LowSeverity() {
  // This would normally fetch data from an API
  const mockIncidents = [
    { id: 1, title: "Minor sidewalk cracks", location: "Cedar Lane", reportDate: "2023-04-22", status: "Open" },
    { id: 2, title: "Overgrown vegetation", location: "Park View Rd", reportDate: "2023-04-21", status: "Scheduled" },
    { id: 3, title: "Graffiti on road signs", location: "Industrial Way", reportDate: "2023-04-20", status: "Open" },
    { id: 4, title: "Faded pedestrian crossing", location: "School Zone, Pine St", reportDate: "2023-04-18", status: "In Progress" },
    { id: 5, title: "Minor drainage issue", location: "Market Square", reportDate: "2023-04-16", status: "Open" }
  ];

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
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
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

export default LowSeverity
