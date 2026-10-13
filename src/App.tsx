import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Developments from './pages/Developments';
import Buildings from './pages/Buildings';
import Units from './pages/Units';
import Leads from './pages/Leads';
import Companies from './pages/Companies';
import Contacts from './pages/Contacts';
import Deals from './pages/Deals';
import Activities from './pages/Activities';
import AttorneyFirms from './pages/AttorneyFirms';
import Reports from './pages/Reports';

export default function App() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/developments" element={<Developments />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="/units" element={<Units />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/attorney-firms" element={<AttorneyFirms />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
      </div>
    </div>
  );
}
