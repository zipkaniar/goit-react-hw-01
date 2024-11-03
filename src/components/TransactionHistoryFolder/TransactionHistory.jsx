import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionTable}>
      <thead  className={styles.thead}>
        <tr  className={styles.tr}>
          <th  className={styles.type}>Type</th>
          <th  className={styles.amount}>Amount</th>
          <th  className={styles.currency}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
      {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.id} key={id}>
            <td className={styles.typeData}>{type}</td> 
            <td className={styles.amountData}>{amount}</td>
            <td className={styles.currencyData}>{currency}</td>
          </tr> 
        ))}
      </tbody>
    </table>
  );  
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;