import PropTypes from 'prop-types';
import transactionCss from './TransactionHistory.module.css';

export function TransactionHistory ({data}) {
    return (
        <table className={transactionCss['transaction-history']}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
            {data.map( el => (
                <tr key={el.id}>
                    <td>{el.type}</td>
                    <td>{el.amount}</td>
                    <td>{el.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    data: PropTypes.array
}