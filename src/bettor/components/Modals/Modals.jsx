import React from 'react';
import { useSelector } from 'react-redux';

import AddPaymentCardModal from './AddPaymentCardModal';
import AddTransactionModal from './AddTransactionModal';
import AlertModal from './AlertModal';
import CompleteBetModal from './CompleteBetModal';
import ConfirmBetDisputeModal from './ConfirmBetDisputeModal';
import CreateNewTeamModal from './CreateNewTeamModal';
import EditTeamModal from './EditTeamModal';
import InviteToTeamModal from './InviteToTeamModal';
import OtpVerificationModal from './OtpVerificationModal';
import PlaceBetModal from './PlaceBetModal';
import ReferModal from './ReferModal';
import RemoveTeamMemberModal from './RemoveTeamMemberModal';
import ReviseBetResultModal from './ReviseBetResultModal';
import ViewJoinedBetMembersModal from './ViewJoinedBetMembersModal';

const Modals = () => {
  const toggle = useSelector(state => state.app.toggle || {});
  return (
    <React.Fragment>
      {toggle.addPaymentCardModal !== undefined && <AddPaymentCardModal />}
      {toggle.addTransactionModal !== undefined && <AddTransactionModal />}
      {toggle.alertModal !== undefined && <AlertModal />}
      {toggle.completeBetModal !== undefined && <CompleteBetModal />}
      {toggle.confirmBetDisputeModal !== undefined && <ConfirmBetDisputeModal />}
      {toggle.createNewTeamModal !== undefined && <CreateNewTeamModal />}
      {toggle.editTeamModal !== undefined && <EditTeamModal />}
      {toggle.inviteToTeamModal !== undefined && <InviteToTeamModal />}
      {toggle.otpVerificationModal !== undefined && <OtpVerificationModal />}
      {toggle.placeBetModal !== undefined && <PlaceBetModal />}
      {toggle.referModal !== undefined && <ReferModal />}
      {toggle.removeTeamMemberModal !== undefined && <RemoveTeamMemberModal />}
      {toggle.reviseBetResultModal !== undefined && <ReviseBetResultModal />}
      {toggle.viewJoinedBetMembersModal !== undefined && <ViewJoinedBetMembersModal />}
    </React.Fragment>
  );
};

export default Modals;
