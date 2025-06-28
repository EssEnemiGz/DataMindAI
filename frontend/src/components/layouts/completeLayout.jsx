import { Navigation } from '../navigation';
import { Footer } from '../footer';
import { Outlet } from 'react-router-dom';

export function CompleteLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}