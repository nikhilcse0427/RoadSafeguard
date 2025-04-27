import React from 'react'

function NewestIncidentFirst() {
  // This would normally fetch data from an API
  const mockIncidents = [
    { id: 1, title: "Minor sidewalk cracks", location: "Cedar Lane", reportDate: "2023-04-24", severity: "Low", status: "Open" },
    { id: 2, title: "Pothole", location: "Main Street", reportDate: "2023-04-23", severity: "Medium", status: "Open" },
    { id: 3, title: "Graffiti on road signs", location: "Industrial Way", reportDate: "2023-04-22", severity: "Low", status: "Scheduled" },
    { id: 4, title: "Missing street sign", location: "Elm St & Maple Ave", reportDate: "2023-04-21", severity: "Medium", status: "In Progress" },
    { id: 5, title: "Dangerous intersection", location: "Oak St & Pine Ave", reportDate: "2023-04-20", severity: "High", status: "In Progress" }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Newest Incidents First</h1>
      <p className="text-gray-600 mb-8">Showing all incidents sorted by most recent report date.</p>

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
                Severity
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
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${incident.severity === "High"
                      ? "bg-red-100 text-red-800"
                      : incident.severity === "Medium"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-green-100 text-green-800"
                    }`}>
                    {incident.severity}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
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

export default NewestIncidentFirst
