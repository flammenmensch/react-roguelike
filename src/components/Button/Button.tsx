import styles from './Button.module.scss';

interface Props {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: Props) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
