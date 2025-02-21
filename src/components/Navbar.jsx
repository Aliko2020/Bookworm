import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { toggleDarkMode } from "../features/appTheme/darkModeSlice";
import { useDispatch, useSelector } from "react-redux";




function Navbar() {
    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state)=> state.darkMode.isDarkMode);
    const { isAuthenticated, user } = useSelector((state)=> state.auth)
    
    const handleSearch = (e) => {
        setSearchInput(e.target.value) 
    }

    return (
        <nav className="flex justify-between items-center gap-4 p-4 border-b">
            <div className="flex items-center gap-4">
                <RxHamburgerMenu size={24} />
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
                <Link to="#">{isAuthenticated? <img src={user.picture} alt="user image"/> : <CiUser size={20}/>}</Link>
                <Link to="#"><CiHeart size={20}/></Link>
                <Link className="flex items-center bg-custom-yellow  py-1 px-3 rounded-sm" to="#"><CiShoppingCart size={20}/>{2}</Link>
                <button onClick={() => dispatch(toggleDarkMode())}> {isDarkMode? <CiLight size={20} /> : <CiDark size={20} />} </button>
            </div>
        </nav>
    )
}

export default Navbar
