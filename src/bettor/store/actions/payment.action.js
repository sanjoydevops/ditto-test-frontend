import { PaymentConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const addPaymentCard = data =>
  request(PaymentConstant.ADD_PAYMENT_CARD, {
    data,
    form: true,
    method: 'post',
    url: '/add-payment-card',
  });

export const listAllPaymentCards = () =>
  request(PaymentConstant.LIST_ALL_PAYMENT_CARDS, {
    method: 'get',
    url: '/list-all-payment-cards',
  });

export const removePaymentCard = paymentCardId =>
  request(PaymentConstant.REMOVE_PAYMENT_CARD, {
    method: 'delete',
    url: `/remove-payment-card/${paymentCardId}`,
  });
