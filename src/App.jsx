import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard"
import Investment from "./pages/investment/Investment"
import Savingplans from "./pages/Saving/Savingplans"
import Promos from './pages/promos/Promos';
import Promosdetails from './pages/promos/Promosdetails';
import Cards from './pages/Cards/Cards';
import Transaction from './pages/Transaction/Transaction';
import Insights from './pages/Insights/Insights';
import Insightdetails from "./pages/Insights/Insightdetails"
import Invoices from './pages/invoices/Invoices';
import Payments from './pages/Payments/Payments';
import Transfer from './pages/Payments/Transfer';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/savings" element={<Savingplans />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/promos/details" element={<Promosdetails />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insight/details" element={<Insightdetails />} />
          <Route path="/invoice" element={<Invoices />} />
          <Route path="/payments/payment" element={<Payments />} />
          <Route path="/payments/transfer" element={<Transfer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
