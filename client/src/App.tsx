import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AnalyticsPage, DashboardPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/analytics" element={<AnalyticsPage />} /> 
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
