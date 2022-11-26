import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search.png";

const Header = () => {
    return <div className=" flex justify-between p-3 bg-black text-white text-center uppercase text-xl">
        <Link to="/">Aviabit</Link>
        <Link to="/search"
            className="w-8 hover:opacity-60"
            style={{ background: `url(${searchIcon}) no-repeat center/contain`, filter: "invert(100%)" }}>
        </Link>
    </div >;
};

export default Header;
