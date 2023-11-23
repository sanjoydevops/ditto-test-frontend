import React, { Fragment } from 'react';
import classNames from 'classnames';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FrequentlyAskedQuestionAction } from '../../store/actions';

const FrequentlyAskedQuestionsTable = ({ frequentlyAskedQuestions }) => {
  const dispatch = useDispatch();
  const authPermissions = useSelector(state => state.auth.permissions);
  const onRemove = frequentlyAskedQuestion => {
    if (window.confirm(`Do you want to remove "${frequentlyAskedQuestion?.question}"?`)) {
      dispatch(FrequentlyAskedQuestionAction.removeFrequentlyAskedQuestion(frequentlyAskedQuestion?.id));
    }
  };
  const onToggleVisibility = frequentlyAskedQuestion => {
    if (window.confirm(`Do you want to ${frequentlyAskedQuestion?.visibility ? 'hide' : 'show'} "${frequentlyAskedQuestion?.question}"?`)) {
      dispatch(FrequentlyAskedQuestionAction.toggleVisibilityFrequentlyAskedQuestion(frequentlyAskedQuestion?.id, {
        visibility: !frequentlyAskedQuestion?.visibility
      }));
    }
  };
  return (
    <table className="table table-head-fixed text-nowrap">
      <thead>
        <tr>
          <th>Action</th>
          {/* <th>ID</th> */}
          <th>Question</th>
          <th>Answer</th>
          <th>Visibility</th>
        </tr>
      </thead>
      <tbody>
        {frequentlyAskedQuestions?.map?.((frequentlyAskedQuestion, i) => (
          <tr key={i}>
            <td className="p-2">
              <Dropdown as={ButtonGroup}>
                {authPermissions.includes('frequently-asked-question.view') && (
                  <Link className="btn btn-primary btn-sm" to={`/admin/frequently-asked-question-detail/${frequentlyAskedQuestion?.id}`}>
                    View
                  </Link>
                )}
                {authPermissions.some(p => ['frequently-asked-question.remove', 'frequently-asked-question.toggle-visibility'].includes(p)) && (
                  <Fragment>
                    <Dropdown.Toggle size="sm" variant="secondary">
                      More
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-2">
                      {authPermissions.includes('frequently-asked-question.edit') && (
                        <Link className="bg-info dropdown-item" to={`/admin/edit-frequently-asked-question/${frequentlyAskedQuestion?.id}`}>
                          Edit
                        </Link>
                      )}
                      <Dropdown.Divider />
                      {authPermissions.includes('frequently-asked-question.remove') && (
                        <Dropdown.Item className="bg-danger" onClick={() => onRemove(frequentlyAskedQuestion)}>
                          Remove
                        </Dropdown.Item>
                      )}
                      <Dropdown.Divider />
                      {authPermissions.includes('frequently-asked-question.toggle-visibility') && (
                        <Dropdown.Item className="bg-warning" onClick={() => onToggleVisibility(frequentlyAskedQuestion)}>
                          {frequentlyAskedQuestion?.visibility ? 'Hide' : 'Show' }
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Fragment>
                )}
              </Dropdown>
            </td>
            {/* <td>{frequentlyAskedQuestion?.id}</td> */}
            <td>{frequentlyAskedQuestion?.question}</td>
            <td>{frequentlyAskedQuestion?.answer}</td>
            <td>
              <span className={classNames({ 'bg-warning': !frequentlyAskedQuestion?.visibility })}>
                {frequentlyAskedQuestion?.visibility ? 'Shown' : 'Hidden'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FrequentlyAskedQuestionsTable;
