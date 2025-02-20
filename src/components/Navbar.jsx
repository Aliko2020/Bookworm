import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function Navbar() {
    const [searchInput, setSearchInput] = useState("")
    
    const handleSearch = (e) => {
        setSearchInput(e.target.value) 
    }

    return (
        <nav className="flex justify-between items-center gap-4 p-4">
            <div className="flex items-center gap-4">
                <RxHamburgerMenu size={24} />
                <div className="flex items-center gap-1 bg-custom-gray p-1 rounded-sm">
                    <CiSearch size={20} />
                    <input
                        className="bg-custom-gray focus:outline-none" 
                        type="text"
                        placeholder="Search book's name"
                        value={searchInput}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="flex items-center gap-4 bg-custom-gray px-2 rounded-sm">
                <Link to="#"><CiUser size={20}/></Link>
                <Link to="#"><CiHeart size={20}/></Link>
                <Link className="flex items-center bg-custom-yellow py-1 px-3 rounded-sm" to="#"><CiShoppingCart size={20}/>{2}</Link>
            </div>
        </nav>
    )
}

export default Navbar
