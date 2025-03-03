import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import userAvatar from "../assets/images/avatar.png";
import books from "../data/books";


function Navbar() {
    const [searchInput, setSearchInput] = useState("");
    const [filtered, setFilteredSearch] = useState([])

    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    const handleSearch = (e) => {
        setSearchInput(e.target.value);

        const filter = books.filter((item)=> item.title.toLowerCase().includes(searchInput.toLowerCase()))
        setFilteredSearch(filtered)
    };
    console.log(books);
    
    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
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
                        <CiUser size={20} onClick={() => { loginWithRedirect() }} />
                    )}
                </Link>
                <Link className="flex items-center bg-custom-yellow text-white py-1 px-3 rounded-sm" to="#"><CiShoppingCart size={20} /></Link>
                <button onClick={isAuthenticated ? handleLogout : loginWithRedirect} className="text-gray hover:text-red-700">
                    {isAuthenticated ? "Logout" : "Login"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
