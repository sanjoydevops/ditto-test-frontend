import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { FrequentlyAskedQuestionAction } from '../../store/actions';

const FrequentlyAskedQuestionDetail = () => {
  const dispatch = useDispatch();
  const { frequentlyAskedQuestionId } = useParams();
  const frequentlyAskedQuestion = useSelector(state => state.detail.frequentlyAskedQuestion);
  useEffect(() => {
    dispatch(FrequentlyAskedQuestionAction.viewFrequentlyAskedQuestion(frequentlyAskedQuestionId));
  }, [dispatch, frequentlyAskedQuestionId]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              FAQ Detail
            </h3>
          </div>
          <div className="card-body">
            <dl className="mb-0">
              {/* <dt>ID</dt>
              <dd>{frequentlyAskedQuestion?.id}</dd> */}
              <dt>Question</dt>
              <dd>{frequentlyAskedQuestion?.question}</dd>
              <dt>Answer</dt>
              <dd>{frequentlyAskedQuestion?.answer}</dd>
              <dt>Visibility</dt>
              <dd>
                <span className={classNames({ 'bg-warning': !frequentlyAskedQuestion?.visibility })}>
                  {frequentlyAskedQuestion?.visibility ? 'Shown' : 'Hidden'}
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestionDetail;
