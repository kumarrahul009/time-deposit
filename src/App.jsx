import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import CreateDeposit from "./pages/CreateDeposit";
import MyDeposits from "./pages/MyDeposits";
import FAQ from "./pages/FAQ";
import Header from "./assets/components/Header";
import { Button } from "./assets/components/UI/Button";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <Header />

        {/* Navigation */}
        <nav className="flex justify-center space-x-6 p-4 bg-white shadow">
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${
                isActive ? "bg-blue-500 text-white" : "text-blue-600"
              }`
            }
          >
            Create Deposit
          </NavLink>

          <NavLink
            to="/my-deposits"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${
                isActive ? "bg-blue-500 text-white" : "text-blue-600"
              }`
            }
          >
            My Deposits
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${
                isActive ? "bg-blue-500 text-white" : "text-blue-600"
              }`
            }
          >
            FAQ
          </NavLink>
        </nav>

        {/* Routes */}
        <main className="p-6">
          <Routes>
            <Route path="/create" element={<CreateDeposit />} />
            <Route path="/my-deposits" element={<MyDeposits />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
              path="/"
              element={
                <div className="text-center mt-20">
                  <h1 className="text-3xl font-bold text-blue-600">
                    Welcome to Time Deposit App
                  </h1>
                  <p className="mt-4 text-gray-600">
                    Manage your deposits with ease.
                  </p>
                  <div className="mt-6">
                    <NavLink to="/create">
                      <Button>Create a Deposit</Button>
                    </NavLink>
                  </div>
                </div>
              }
            
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}