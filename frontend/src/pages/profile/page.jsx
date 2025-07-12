import { UserProfile } from "../../components/user-profile";
import { CookieDebug } from "../../components/cookie-debug";
import { DashboardNavigation } from "../../components/dashboard-navigation";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavigation></DashboardNavigation>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">User Profile</h1>
            <p className="text-gray-600">View your account information and session details</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <UserProfile />
            <CookieDebug />
          </div>
        </div>
      </div>
    </div>
  );
} 