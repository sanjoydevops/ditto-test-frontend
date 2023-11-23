import React from 'react';

const ReferralsTable = ({ referrals }) => (
  <table className="table table-bordered table-head-fixed text-nowrap">
    <thead>
      <tr>
        {/* <th></th> */}
        <th colSpan="4">From</th>
        <th>To</th>
      </tr>
      <tr>
        {/* <th>ID</th> */}
        <th>Referred At</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Email / Phone</th>
      </tr>
    </thead>
    <tbody>
      {referrals?.map?.((referral, i) => (
        <tr key={i}>
          {/* <td>{referral?.id}</td> */}
          <td>{referral.created_date} {referral.created_time}</td>
          <td>{referral?.user?.profile?.full_name}</td>
          <td>{referral?.user?.email}</td>
          <td>{referral?.user?.phone}</td>
          <td>{referral?.contact}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ReferralsTable;
