import { useDispatch } from "react-redux";
import { removeById } from "../../../Features/productsSlice";
import CustomNumberInput from "../../Shared/MiniComponents/CustomNumberInput";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./CartProduct.module.scss";

const CartProduct = ({ data }) => {
  const { img, shortName, afterDiscount, quantity, id } = data;
  const subTotal = (quantity * afterDiscount).toFixed(2);
  const dispatch = useDispatch();

  return (
    <tr className={s.productContainer}>
      <td className={s.product}>
        <div className={s.imgHolder}>
          <img src={img} alt={shortName} />

          <button
            type="button"
            className={s.removeButton}
            onClick={() => dispatch(removeById({ key: "cartProducts", id }))}
          >
            <SvgIcon name="xMark" />
            <ToolTip top="50%" left="-44px" content="remove" />
          </button>
        </div>
        <span>{shortName}</span>
      </td>

      <td className={s.price}>${afterDiscount}</td>

      <td>
        <CustomNumberInput product={data} quantity={quantity} />
      </td>

      <td>${subTotal}</td>
    </tr>
  );
};
export default CartProduct;
