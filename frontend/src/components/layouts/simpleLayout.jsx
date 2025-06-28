import { Outlet } from 'react-router-dom';

export default function SimpleLayout() {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}