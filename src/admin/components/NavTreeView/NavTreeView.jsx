import React from 'react';
import classNames from 'classnames';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { AppAction } from '../../store/actions';

const NavTreeView = ({ children, icon, isOpen, name, title }) => {
  const dispatch = useDispatch();
  const key = `${name}NavTreeView`;
  const isMenuOpen = useSelector(state => state.app.toggle?.[key] || isOpen);
  const onToggle = () => dispatch(AppAction.toggle({ key, value: !isMenuOpen }));
  return (
    <Nav.Item as="li" className={classNames({
      'menu-is-opening menu-open': isMenuOpen,
    })}>
      <Nav.Link onClick={onToggle}>
        {icon && <i className={classNames('nav-icon fas', icon)}></i>}
        <p>
          {title}
          <i className="right fas fa-angle-left"></i>
        </p>
      </Nav.Link>
      <Nav as="ul" bsPrefix="" className="nav-treeview">
        {children}
      </Nav>
    </Nav.Item>
  );
};

export default NavTreeView;
