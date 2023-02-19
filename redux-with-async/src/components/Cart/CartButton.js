import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const quantity = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();

  const cartClickHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
