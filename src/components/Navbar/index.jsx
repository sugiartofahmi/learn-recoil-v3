import NavLayout from "../../layouts/NavLayout";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "../Cart";
import { useState } from "react";
const Navbar = () => {
  const [showCart, setShowCart] = useState(true);
  return (
    <NavLayout>
      <div className="gap-x-[45px] text-lg flex flex-row">
        <h1 className="font-bold">Fatamorgana Shop</h1>
        <ul className="flex flex-row gap-x-[30px] "></ul>
      </div>
      <div className="flex flex-row items-center gap-x-5 ">
        {!showCart ? (
          <h1 onClick={() => setShowCart(!showCart)} className="text-lg">
            <AiOutlineShoppingCart size={30} />
          </h1>
        ) : (
          <Cart onClick={() => setShowCart(!showCart)} />
        )}
      </div>
    </NavLayout>
  );
};

export default Navbar;
