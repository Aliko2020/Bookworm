import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import userAvatar from "/public/avatar.png";


function Navbar() {
    const [searchInput, setSearchInput] = useState("");
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    
    
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <nav className="flex justify-between items-center gap-4 p-4 border-b">
            <div className="flex items-center gap-4">
                <Link to="/">
                    <RxHamburgerMenu size={24} />
                </Link>
                <div className="hidden sm:flex items-center gap-1 bg-custom-gray dark:bg-gray-600 p-1 rounded-sm">
                    <CiSearch size={20} />
                    <input
                        className="bg-custom-gray dark:bg-gray-600 focus:outline-none"
                        type="text"
                        placeholder="Search book's name"
                        value={searchInput}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="flex items-center gap-4 text-gray-500 bg-custom-gray dark:bg-gray-600 px-2 rounded-sm">
                <Link to="#">
                    {isAuthenticated ? (
                        <img
                        className="w-6 rounded-full"
                            src={user?.picture || userAvatar}
                            alt="user"
                            onError={(e) => { e.target.src = userAvatar; }}
                        />
                    ) : (
                        <CiUser size={20} />
                    )}
                </Link>
                {/* <Link to="#"><CiHeart size={20} /></Link> */}
                <Link className="flex items-center bg-custom-yellow text-white py-1 px-3 rounded-sm" to="#"><CiShoppingCart size={20} /></Link>
                {/* <button onClick={() => dispatch(toggleDarkMode())}>
                    {isDarkMode ? <CiLight size={20} /> : <CiDark size={20} />}
                </button> */}
                <button onClick={()=>{loginWithRedirect()}} className="text-gray">{isAuthenticated? "Dashboard" : "Login"}</button>
            </div>
        </nav>
    );
}

export default Navbar;
