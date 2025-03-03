import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";


function Dashboard() {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="flex gap-4 min-h-screen">
            <main className="w-full rounded-md">
                <nav className='flex justify-between rounded-sm text-custom-yellow font-semibold px-2 items-center'>
                        <ul className='flex gap-4 text-custom-yellow rounded-md'>
                            <li><Link className="flex gap-2 items-center bg-custom-gray px-4 py-2 text-custom-yellow rounded-md hover:bg-custom-yellow hover:text-white" to="/" ><IoMdHome />Home</Link></li>
                            <li><Link className="flex gap-2 items-center bg-custom-gray px-4 py-2 text-custom-yellow rounded-md hover:bg-custom-yellow hover:text-white" to="favorites" ><FaAlignJustify />Favouites</Link></li>
                            <li><Link className="flex gap-2 items-center bg-custom-gray px-4 py-2 text-custom-yellow rounded-md hover:bg-custom-yellow hover:text-white" to="nextread" ><FaBookOpenReader />NextRead</Link></li>
                        </ul>
                </nav>
                <Outlet />
            </main>
        </div>
    );
}

export default Dashboard;
