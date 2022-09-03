import classNames from 'classnames';
import useCart from '@hooks/useCart';
import styles from './button.module.css';

const Button = ({ children }: Props) => {
  const { items, saveCart } = useCart();

  const buttonClass = classNames(styles.button);

  const hasItems = () => Object.keys(items).length > 0;

  return (
    <button className={buttonClass} disabled={!hasItems()} onClick={saveCart} type="button">
      {children}
    </button>
  );
};

export default Button;

type Props = {
  children: React.ReactNode;
};
