import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { User, Mail, Key, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from './loading-spinner';

export const UserProfile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <LoadingSpinner size="default" />
        </CardContent>
      </Card>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Not Authenticated</CardTitle>
          <CardDescription>Please log in to view your profile</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => navigate('/login')}>
            Go to Login
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <span>User Profile</span>
        </CardTitle>
        <CardDescription>Your account information from session cookies</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">Username</span>
            </div>
            <p className="text-lg font-semibold">{user.username || 'Not set'}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">Email</span>
            </div>
            <p className="text-lg font-semibold">{user.email}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Key className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">User ID</span>
            </div>
            <p className="text-lg font-semibold">{user.user_id}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Key className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">Session ID</span>
            </div>
            <p className="text-sm font-mono bg-gray-100 p-2 rounded">
              {user.session_id?.substring(0, 8)}...
            </p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="w-full"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 