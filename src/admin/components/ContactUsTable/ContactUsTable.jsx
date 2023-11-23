import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUsTable = ({ contactUs }) => (
  <table className="table table-head-fixed text-nowrap">
    <thead>
      <tr>
        <th>Action</th>
        {/* <th>ID</th> */}
        <th>Name</th>
        <th>Email</th>
        <th>Reason</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      {contactUs?.map?.((cu, i) => (
        <tr key={i}>
          <td>
            <ButtonGroup>
              <Link className="btn btn-primary btn-sm" to={`/admin/contact-us-detail/${cu?.id}`}>
                View
              </Link>
            </ButtonGroup>
          </td>
          {/* <td>{cu?.id}</td> */}
          <td>{cu?.name}</td>
          <td>{cu?.email}</td>
          <td>{cu?.reason}</td>
          <td>{cu?.message}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ContactUsTable;
