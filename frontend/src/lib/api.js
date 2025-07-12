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
            
            if (isProtectedRoute) {
                isRedirecting = true;
                
                if (window.location.pathname !== '/login') {
                    console.log('🔄 Redirecting from protected route to login');
                    window.location.href = "/login";
                }
                
                setTimeout(() => {
                    isRedirecting = false;
                }, 1000);
            } else {
                console.log('ℹ️ 401 error on public route, not redirecting');
            }
        }
        return Promise.reject(error);
    }
);

export default api;