import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import { useContext } from "react";
import './Nav.css';

function Nav(){
    const { items } = useContext(CartContext);
    return(
        <nav>
        <Link to={"/"}>
                <h1>Wear</h1>
        </Link>
        <Link to={"/checkout"}>
            <div className="cart">
                <AiFillShopping />
                <span>{items.length}</span>
            </div>
        </Link>
        </nav>
    );
}

export default Nav;