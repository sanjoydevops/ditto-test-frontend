import React from 'react';

import './EmptyListCard.scss';
import dittoMarcMewCoinFinal from '../../../assets/img/DittoMarc-new-coin-final.png';

const EmptyListCard = props => (
  <div className="Empty_List_Card">
    <img alt="empty-card" className="Empty_List_Card_Image" src={dittoMarcMewCoinFinal} />
    <h6 className="Empty_List_Card_Message">
      {props.message || 'You don\'t have any data.'}
    </h6>
  </div>
);

export default EmptyListCard;
