import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.SERVER_URL || "http://localhost:8000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});

let isRedirecting = false;

const protectedRoutes = [
    '/dashboard',
    '/reports', 
    '/settings',
    '/chat',
    '/profile'
];

const publicRoutes = [
    '/',
    '/login',
    '/register',
    '/features',
    '/docs',
    '/about',
    '/pricing'
];

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 && !isRedirecting) {
            const currentPath = window.location.pathname;
            
            const isProtectedRoute = protectedRoutes.some(route => 
                currentPath.startsWith(route)
            );
            
            // Check if we have a session cookie before redirecting
            const hasSessionCookie = document.cookie.includes('session_id=');
            console.log('🍪 Checking cookies in interceptor:', document.cookie);
            console.log('🍪 Has session cookie:', hasSessionCookie);
            console.log('🛡️ Is protected route:', isProtectedRoute);
            
            // Only redirect on protected routes
            if (isProtectedRoute && !hasSessionCookie) {
                isRedirecting = true;
                
                if (window.location.pathname !== '/login') {
                    console.log('🔄 No session cookie found on protected route, redirecting to login');
                    setTimeout(() => {
                        if (window.location.pathname !== '/login') {
                            window.location.href = "/login";
                        }
                        isRedirecting = false;
                    }, 100);
                } else {
                    isRedirecting = false;
                }
            } else if (isProtectedRoute && hasSessionCookie) {
                console.log('🍪 Session cookie found on protected route, not redirecting - letting AuthContext handle it');
            } else {
                console.log('ℹ️ 401 error on public route, not redirecting - user can stay here');
            }
        }
        return Promise.reject(error);
    }
);

export default api;