import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { FrequentlyAskedQuestionAction, FormAction } from '../../store/actions';

const FrequentlyAskedQuestionForm = () => {
  const dispatch = useDispatch();
  const { frequentlyAskedQuestionId } = useParams();
  const { errors, formKey, message } = useSelector(state => state.form[frequentlyAskedQuestionId ? 'updateFrequentlyAskedQuestion' : 'createFrequentlyAskedQuestion'] || {});
  const frequentlyAskedQuestion = useSelector(state => frequentlyAskedQuestionId ? { ...state.detail.frequentlyAskedQuestion } : {});
  const [question, setQuestion] = useState(frequentlyAskedQuestion.question || '');
  const [answer, setAnswer] = useState(frequentlyAskedQuestion.answer || '');
  const onClear = () => {
    setQuestion('');
    setAnswer('');
  };
  const onReset = () => {
    setQuestion(frequentlyAskedQuestion.question || '');
    setAnswer(frequentlyAskedQuestion.answer || '');
  };
  const onSubmit = event => {
    event.preventDefault();
    const data = {
      question,
      answer,
    };
    dispatch(
      frequentlyAskedQuestionId
        ? FrequentlyAskedQuestionAction.updateFrequentlyAskedQuestion(frequentlyAskedQuestionId, data)
        : FrequentlyAskedQuestionAction.createFrequentlyAskedQuestion(data)
    );
  };
  useEffect(() => frequentlyAskedQuestionId && dispatch(FrequentlyAskedQuestionAction.viewFrequentlyAskedQuestion(frequentlyAskedQuestionId)), [dispatch, frequentlyAskedQuestionId]);
  useEffect(() => {
    setQuestion(frequentlyAskedQuestion.question || '');
    setAnswer(frequentlyAskedQuestion.answer || '');
  }, [frequentlyAskedQuestion.question, frequentlyAskedQuestion.answer]);
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(FormAction.unsetForm(
        formKey,
      ));
    }
  }, [dispatch, errors, formKey, message]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card card-outline">
          <div className="card-header">
            <h3 className="card-title">
              {frequentlyAskedQuestionId ? 'Edit' : 'Create'} FAQ
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.question?.length,
                  })}
                  name="question"
                  onChange={event => setQuestion(event.target.value)}
                  placeholder="Enter Question"
                  type="text"
                  value={question}
                />
                <div className="invalid-feedback">
                  {errors?.question?.join(' ')}
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className={classNames('form-control', {
                    'is-invalid': errors?.answer?.length,
                  })}
                  name="answer"
                  onChange={event => setAnswer(event.target.value)}
                  placeholder="Enter Answer"
                  value={answer}
                />
                <div className="invalid-feedback">
                  {errors?.answer?.join(' ')}
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-block btn-warning" onClick={frequentlyAskedQuestionId ? onReset : onClear} type="button">
                    {frequentlyAskedQuestionId ? 'Reset' : 'Clear'}
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary btn-block" type="submit">
                    {frequentlyAskedQuestionId ? 'Update' : 'Create'} FAQ
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestionForm;
