import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Pagination = ({ links }) => {
  return (
    <ul className="pagination pagination-sm mb-0">
      {links?.map?.(link => link?.url && (
        <li
          className={classNames('page-item', {
            'active': link?.active,
          })}
          key={link?.label}
        >
          <Link
            className="page-link"
            dangerouslySetInnerHTML={{ __html: link?.label }}
            to={link?.url}
          />
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
