import { useRecoilState } from "recoil";
import { cartState } from "../../store";
const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
};

export default Cart;
