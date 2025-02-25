import { useSelector } from 'react-redux';
import { format } from 'date-fns';

function Dashboard() {
    const user = useSelector((state) => state.auth.user);
    console.log(user);

    const formattedUpdatedAt = user?.updated_at ? format(new Date(user.updated_at), 'EEEE, p') : '';

    return (
        <div className="flex min-h-screen">
            <aside className="hidden lg:flex lg:flex-col lg:w-1/5 bg-custom-gray p-4 rounded-md">
                {user && (
                    <div className="flex flex-col items-center gap-1 bg-white py-4 rounded-md">
                        <img
                            src={user?.picture}
                            alt="User"
                            className="rounded-full w-20 h-20 mb-4"
                        />
                        <h2 className="text-xl font-semibold text-custom-yellow">{user.name}</h2>
                        <p className="text-gray-600 text-sm">{user.email}</p>
                        <p className="text-gray-600 text-sm">Updated at: {formattedUpdatedAt}</p>
                    </div>
                )}
            </aside>
            <main className="w-full lg:w-4/5 p-10">
                <h1>Dashboard Component</h1>
            </main>
        </div>
    );
}

export default Dashboard;
