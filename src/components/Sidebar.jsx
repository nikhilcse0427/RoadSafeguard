import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="hidden sm:flex flex-col w-64 bg-white border-r border-gray-200 shadow-sm overflow-y-auto">
      <div className="px-6 py-6 flex items-center border-b border-gray-200">
        <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg font-semibold mr-3">
          RS
        </div>
        <h1 className="text-xl font-bold text-gray-900">RoadSafeguard</h1>
      </div>

      <div className="px-3 py-6 flex-1">
        <div className="space-y-0.5">
          <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main
          </p>

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>About</span>
          </NavLink>

          <NavLink
            to="/report"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span>Report Incident</span>
          </NavLink>
        </div>

        <div className="mt-6 space-y-0.5">
          <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Incident Severity
          </p>

          <NavLink
            to="/all-severity"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <div className="h-2 w-2 rounded-full bg-violet-700"></div>
            <span>All Severity</span>
          </NavLink>

          <NavLink
            to="/high-severity"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <span>High Severity</span>
          </NavLink>

          <NavLink
            to="/medium-severity"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
            <span>Medium Severity</span>
          </NavLink>

          <NavLink
            to="/low-severity"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>Low Severity</span>
          </NavLink>
        </div>

        <div className="mt-6 space-y-0.5">
          <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Sort Options
          </p>

          <NavLink
            to="/newest-first"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg>
            <span>Newest First</span>
          </NavLink>

          <NavLink
            to="/oldest-first"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg>
            <span>Oldest First</span>
          </NavLink>
        </div>
      </div>

      <div className="px-3 py-4 mt-auto border-t border-gray-200">
        <div className="bg-blue-50 text-blue-700 rounded-lg p-3">
          <div className="flex items-center">
            <div className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">Need help?</p>
              <p className="text-xs">Check our documentation</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar