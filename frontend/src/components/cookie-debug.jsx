import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { RefreshCw, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { authService } from '../lib/authService';

export const CookieDebug = () => {
  const [cookies, setCookies] = useState({});
  const [apiCalls, setApiCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCookies = () => {
    const cookieString = document.cookie;
    const cookies = {};
    
    if (cookieString) {
      cookieString.split(';').forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        cookies[name] = value;
      });
    }
    
    setCookies(cookies);
  };

  const testMeEndpoint = async () => {
    setIsLoading(true);
    const startTime = Date.now();
    
    try {
      const result = await authService.getCurrentUser();
      const endTime = Date.now();
      
      setApiCalls(prev => [...prev, {
        timestamp: new Date().toISOString(),
        duration: endTime - startTime,
        success: true,
        result: result
      }]);
    } catch (error) {
      const endTime = Date.now();
      
      setApiCalls(prev => [...prev, {
        timestamp: new Date().toISOString(),
        duration: endTime - startTime,
        success: false,
        error: error.message
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearApiCalls = () => {
    setApiCalls([]);
  };

  useEffect(() => {
    getCookies();
    
    const interval = setInterval(getCookies, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Debug Information
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={testMeEndpoint}
              disabled={isLoading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Test /me
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearApiCalls}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>
        </CardTitle>
        <CardDescription>
          Session cookies and API call history
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Session Cookies:</h4>
          <div className="flex flex-col bg-gray-100 p-3 rounded text-sm font-mono max-w-full max-h-[150px] overflow-y-auto">
            {Object.keys(cookies).length > 0 ? (
              Object.entries(cookies).map(([name, value]) => (
                <div key={name} className="mb-1">
                  <span className="text-blue-600">{name}:</span> {value}
                </div>
              ))
            ) : (
              <div className="text-gray-500">No cookies found</div>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">API Calls to /me ({apiCalls.length}):</h4>
          <div className="max-h-[90px] overflow-y-auto space-y-2">
            {apiCalls.length > 0 ? (
              apiCalls.slice().reverse().map((call, index) => (
                <div 
                  key={index} 
                  className={`p-2 rounded text-sm border ${
                    call.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-gray-500">
                      {new Date(call.timestamp).toLocaleTimeString()}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      call.success ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                    }`}>
                      {call.success ? 'SUCCESS' : 'ERROR'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Duration: {call.duration}ms
                  </div>
                  {call.success ? (
                    <div className="text-xs mt-1">
                      User: {call.result?.email || 'Unknown'}
                    </div>
                  ) : (
                    <div className="text-xs mt-1 text-red-600">
                      Error: {call.error}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-sm">No API calls recorded</div>
            )}
          </div>
        </div>

        {apiCalls.length > 10 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <div className="text-yellow-800 text-sm">
              <strong>Warning:</strong> Many API calls detected. This might indicate a loop or excessive re-renders.
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}; 