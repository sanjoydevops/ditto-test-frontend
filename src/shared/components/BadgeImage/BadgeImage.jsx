import React from 'react';
import classNames from 'classnames';

import greatGreenIcon from '../../assets/img/GreatGreenIcon.png';
import greatIcon from '../../assets/img/GreatIcon.png';
import soreLoserGreenIcon from '../../assets/img/SoreLoserGreenIcon.png';
import soreLoserIcon from '../../assets/img/SoreLoserIcon.png';
import soSoGreenIcon from '../../assets/img/SoSoGreenIcon.png';
import soSoIcon from '../../assets/img/SoSoIcon.png';

const BadgeImage = ({ color, fluid, value, ...rest }) => {
  const val = Number(value);
  return [1, 2, 3].includes(val) && (
    <img
      alt="badge"
      className={classNames({ 'img-fluid': fluid })}
      src={(color === 'green' && [
        1 === val && soreLoserGreenIcon,
        2 === val && soSoGreenIcon,
        3 === val && greatGreenIcon,
      ].find(f => f)) || (color === 'default' && [
        1 === val && soreLoserIcon,
        2 === val && soSoIcon,
        3 === val && greatIcon,
      ].find(f => f))}
      {...rest}
    />
  );
};

export default BadgeImage;
