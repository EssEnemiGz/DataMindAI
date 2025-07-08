import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/page';
import RegisterPage from './pages/register/page';
import LoginPage from './pages/login/page';
import DashboardPage from './pages/dashboard/page';
import PricingPage from './pages/pricing/page';
import ReportsPage from './pages/reports/page';
import ChatPage from './pages/chat/page';
import AboutPage from './pages/about/page';
import DocsPage from './pages/docs/page';
import SettingsPage from './pages/settings/page';
import { SidebarProvider } from './components/ui/sidebar';
import { CompleteLayout } from './components/layouts/completeLayout';
import SimpleLayout from './components/layouts/simpleLayout';
import FeaturesPage from './pages/features/page';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <SidebarProvider>
            <Routes>
              <Route element={<CompleteLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/features" element={<FeaturesPage />} />
              </Route>
              <Route element={<SimpleLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/chat" element={<ChatPage />} />
              </Route>
            </Routes>
          </SidebarProvider>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
