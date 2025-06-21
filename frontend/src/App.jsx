import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/page';
import RegisterPage from './pages/register/page';
import LoginPage from './pages/login/page';
import DashboardPage from './pages/dashboard/page';
import PricingPage from './pages/pricing/page';
import ReportsPage from './pages/reports/page';
import AboutPage from './pages/about/page';
import DocsPage from './pages/docs/page';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { SidebarProvider } from './components/ui/sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <SidebarProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/docs" element={<DocsPage />} />
            </Routes>
          </SidebarProvider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
