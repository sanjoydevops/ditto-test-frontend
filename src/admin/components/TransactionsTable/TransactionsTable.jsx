import React from 'react';

const TransactionsTable = ({ transactions, columns = true }) => (
  <table className="table table-head-fixed text-nowrap">
    <thead>
      {columns && (
        <tr>
          {/* {(columns === true || columns?.includes?.('id')) && (<th>ID</th>)} */}
          {(columns === true || columns?.includes?.('created_datetime')) && (<th>Transacted At</th>)}
          {(columns === true || columns?.includes?.('full_name')) && (<th>Full Name</th>)}
          {(columns === true || columns?.includes?.('email')) && (<th>Email</th>)}
          {(columns === true || columns?.includes?.('phone')) && (<th>Phone</th>)}
          {(columns === true || columns?.includes?.('type')) && (<th>Transaction Type</th>)}
          {(columns === true || columns?.includes?.('coin_type')) && (<th>DittoCoin Type</th>)}
          {(columns === true || columns?.includes?.('coin')) && (<th>DittoCoin</th>)}
          {(columns === true || columns?.includes?.('amount')) && (<th>Equivalent Amount (USD)</th>)}
          {(columns === true || columns?.includes?.('commission')) && (<th>Commission (USD)</th>)}
          {(columns === true || columns?.includes?.('total')) && (<th>Total (USD)</th>)}
        </tr>
      )}
    </thead>
    <tbody>
      {columns && transactions?.map?.((transaction, i) => (
        <tr key={i}>
          {/* {(columns === true || columns?.includes?.('id')) && (<td>{transaction?.id}</td>)} */}
          {(columns === true || columns?.includes?.('created_datetime')) && (<td>{transaction?.created_date} {transaction.created_time}</td>)}
          {(columns === true || columns?.includes?.('full_name')) && (<td>{transaction?.user?.profile?.full_name}</td>)}
          {(columns === true || columns?.includes?.('email')) && (<td>{transaction?.user?.email}</td>)}
          {(columns === true || columns?.includes?.('phone')) && (<td>{transaction?.user?.phone}</td>)}
          {(columns === true || columns?.includes?.('type')) && (<td>{transaction?.type_text}</td>)}
          {(columns === true || columns?.includes?.('coin_type')) && (<td>{transaction?.coin_type_text}</td>)}
          {(columns === true || columns?.includes?.('coin')) && (<td>{transaction?.coin}</td>)}
          {(columns === true || columns?.includes?.('amount')) && (<td>{transaction?.amount}</td>)}
          {(columns === true || columns?.includes?.('commission')) && (<td>{transaction?.commission}</td>)}
          {(columns === true || columns?.includes?.('total')) && (<td>{transaction?.total}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionsTable;
