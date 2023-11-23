import React, { useEffect } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// import dittoBetsIcon from '../../assets/img/DittoBetsIcon.png';
import dittoMarcNewCoinFinal from '../../assets/img/DittoMarc-new-coin-final.png';

import { AppAction, PaymentAction, TransactionAction } from '../../store/actions';

const Payment = () => {
  const dispatch = useDispatch();
  const allPaymentCards = useSelector(state => state.list.paymentCard?.all || []);
  const allTransactions = useSelector(state => state.list.transaction?.all || []);
  const onAddPaymentCardModalOpen = () => dispatch(AppAction.toggle({
    key: 'addPaymentCardModal',
    value: true,
  }));
  const onAddTransactionModalOpen = () => dispatch(AppAction.toggle({
    key: 'addTransactionModal',
    value: true,
  }));
  const onRemovePaymentCard = paymentCard => {
    if (window.confirm(`Do you want to remove "${paymentCard.card_number}"?`)) {
      dispatch(PaymentAction.removePaymentCard(paymentCard.id));
    }
  };
  useEffect(() => {
    dispatch(PaymentAction.listAllPaymentCards());
    dispatch(TransactionAction.listAllTransactions());
  }, [dispatch]);
  return (
    <div className="container w-1734 opens-my">
      <div className="row">
        <div className="col">
          <div className="profile-team">
            <div className="profile-team-head">
              {/* <h5><img src={dittoBetsIcon} alt="" /> PaymentMethoods</h5> */}
              <h5> Payment Methods</h5>
            </div>
            <Tab.Container defaultActiveKey="payment-cards">
              <div className="profile-team-tab">
                <Nav as="ul" className="nav-tabs">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="payment-cards">Payment Cards</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="cash-out-account">Cash Out Account</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="transaction-history">Transactions (History)</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="payment-cards">
                    <div>
                      <button className="btn btn-add-pay-card" onClick={onAddPaymentCardModalOpen}>
                        + Add Payment Card
                      </button>
                    </div>
                    {allPaymentCards.length === 0 && (
                      <div className="text-center text-white py-5">
                        <img src={dittoMarcNewCoinFinal} className="mb-3" alt="" width="100px" />
                        <h6>You don't have any payment card yet</h6>
                      </div>
                    )}
                    {allPaymentCards.length > 0 && (
                      <div className="payment-card-list table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <td>#</td>
                              <td>Card Type</td>
                              <td>Card Number</td>
                              <td>Expiry</td>
                              <td>Default Action</td>
                              <td>Action</td>
                            </tr>
                          </thead>
                          <tbody>
                            {allPaymentCards.map((paymentCard, i) => (
                              <tr key={i}>
                                <td>{paymentCard.id}</td>
                                <td>{paymentCard.card_type}</td>
                                <td>{paymentCard.card_number}</td>
                                <td>{paymentCard.expiry_date}</td>
                                <td></td>
                                <td>
                                  <button className="btn btn-danger" onClick={() => onRemovePaymentCard(paymentCard)}>
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </Tab.Pane>
                  <Tab.Pane eventKey="cash-out-account">
                    <div className="row">
                      <div className="col-md-1"></div>
                      <div className="col-md-6 col-lg-4">
                        <div className="custom-form mt-3">
                          <form className="custom-form" onSubmit={event => event.preventDefault()}>
                            <div className="form-group">
                              <select className="form-control" name="card_type">
                                <option>Card Type (Debit/Credit/Checking Account</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <input type="text" name="card_holder_name" className="form-control" placeholder="Card Holder Name" />
                            </div>
                            <div className="form-group">
                              <input type="text" name="routing_number" className="form-control" placeholder="Routing Number" />
                            </div>
                            <div className="form-group">
                              <input type="text" name="account_number" className="form-control" placeholder="Account Number" />
                            </div>
                            <button type="submit" className="btn btn-block bg-green btn-cashout-acc">Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="transaction-history">
                    <div>
                      <button className="btn btn-add-pay-card" onClick={onAddTransactionModalOpen}>
                        + Add Transaction
                      </button>
                    </div>
                    {allTransactions.length === 0 && (
                      <div className="text-center text-white py-5">
                        <img src={dittoMarcNewCoinFinal} className="mb-3" alt="" width="100px" />
                        <h6>No transaction history found</h6>
                      </div>
                    )}
                    {allTransactions.length > 0 && (
                      <div className="payment-card-list table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <td>#</td>
                              <td>Transaction Type</td>
                              <td>Date/Time</td>
                              <td>DittoCoin Type</td>
                              <td>DittoCoin</td>
                              <td>Equivalent Amount (USD)</td>
                              <td>Commission (USD)</td>
                              <td>Total (USD)</td>
                            </tr>
                          </thead>
                          <tbody>
                            {allTransactions.map((transaction, i) => (
                              <tr key={i}>
                                <td>{transaction.id}</td>
                                <td>{transaction.type_text}</td>
                                <td>{transaction.created_date} {transaction.created_time}</td>
                                <td>{transaction.coin_type_text}</td>
                                <td>{transaction.coin}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.commission}</td>
                                <td>{transaction.total}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
