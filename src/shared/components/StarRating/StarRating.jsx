import React from 'react';
import classNames from 'classnames';

import styles from './StarRating.module.scss';
import ratingStarBlanckIcon from '../../assets/img/RatingStarblanckIcon.png';
import ratingStarIcon from '../../assets/img/RatingStarIcon.png';

const list = Array(5).fill(0);

const StarRating = ({ styleType, value }) => {
  const val = Number(value);
  return (
    <span className={classNames(styles.StarRating, {
      [styles[`StarRating--${styleType}`]]: styleType,
    })}>
      {list.map((_, i) => {
        i++;
        return styleType === '7' ? (i <= val ? <>&#9733;</> : <>&#9734;</>) : (
          <img
            alt="star-rating"
            className="img-fluid"
            key={i}
            src={i <= val ? ratingStarIcon : ratingStarBlanckIcon}
          />
        );
      })}
    </span>
  );
};

export const StarRatingInput = ({ onChange, styleType, value }) => {
  const val = Number(value);
  return (
    <span className={classNames(styles.StarRating, {
      [styles[`StarRating--${styleType}`]]: styleType,
    })}>
      {list.map((_, i) => {
        i++;
        return (
          <label htmlFor={`rating${i}`} key={i}>
            <input
              checked={i === val}
              className="form-check-input"
              id={`rating${i}`}
              name="rating"
              onChange={event => onChange(Number(event.target.value))}
              type="radio"
              value={i}
            />
            {styleType === '7' ? (i <= val ? <>&#9733;</> : <>&#9734;</>) : (
              <img
                alt="star-rating"
                className="img-fluid"
                src={i <= val ? ratingStarIcon : ratingStarBlanckIcon}
              />
            )}
          </label>
        );
      })}
    </span>
  );
};

export default StarRating;
