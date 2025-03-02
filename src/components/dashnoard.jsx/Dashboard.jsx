import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';



function Dashboard() {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="flex gap-4 min-h-screen">
            {/* <aside className="hidden lg:flex lg:flex-col lg:w-1/5 bg-custom-gray border border-custom-yellow p-4 rounded-md">
                {user && (
                    <div className="flex flex-col items-center gap-1 border bg-custom-yellow text-white py-4 rounded-md">
                        <img
                            src={user?.picture}
                            alt="User"
                            className="rounded-full w-20 h-20 mb-4"
                        />
                        <h2 className="text-xl font-semibold text-custom-yellow">{user.name}</h2>
                        <p className="text-gray-600 text-sm">{user.email}</p>
                  
                    </div>
                )}
            </aside> */}
            <main className="w-full rounded-md">
                <nav className='flex justify-between rounded-sm text-custom-yellow font-semibold items-center py-2'>
                    <span >Dashboard</span>
                    <ul className='flex gap-8 rounded-md py-2'>
                        <li className='underline underline-offset-8'><Link to="favorites">Favorites</Link></li>
                        <li className='underline underline-offset-8'><Link to="nextread">Read Next</Link></li>
                    </ul>
                </nav>
                <Outlet />
            </main>
        </div>
    );
}

export default Dashboard;
