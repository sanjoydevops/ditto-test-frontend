import { FrequentlyAskedQuestionConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const createFrequentlyAskedQuestion = data =>
  request(FrequentlyAskedQuestionConstant.CREATE_FREQUENTLY_ASKED_QUESTION, {
    data,
    form: true,
    method: 'post',
    url: '/create-frequently-asked-question',
  });

export const listAllFrequentlyAskedQuestions = params =>
  request(FrequentlyAskedQuestionConstant.LIST_ALL_FREQUENTLY_ASKED_QUESTIONS, {
    method: 'get',
    params,
    url: '/list-all-frequently-asked-questions',
  });

export const removeFrequentlyAskedQuestion = frequentlyAskedQuestionId =>
  request(FrequentlyAskedQuestionConstant.REMOVE_FREQUENTLY_ASKED_QUESTION, {
    method: 'delete',
    url: `/remove-frequently-asked-question/${frequentlyAskedQuestionId}`,
  });

export const toggleVisibilityFrequentlyAskedQuestion = (frequentlyAskedQuestionId, data) =>
  request(FrequentlyAskedQuestionConstant.TOGGLE_VISIBILITY_FREQUENTLY_ASKED_QUESTION, {
    data,
    method: 'put',
    url: `/toggle-visibility-frequently-asked-question/${frequentlyAskedQuestionId}`,
  });

export const updateFrequentlyAskedQuestion = (frequentlyAskedQuestionId, data) =>
  request(FrequentlyAskedQuestionConstant.UPDATE_FREQUENTLY_ASKED_QUESTION, {
    data,
    form: true,
    method: 'put',
    url: `/update-frequently-asked-question/${frequentlyAskedQuestionId}`,
  });

export const viewFrequentlyAskedQuestion = frequentlyAskedQuestionId =>
  request(FrequentlyAskedQuestionConstant.VIEW_FREQUENTLY_ASKED_QUESTION, {
    method: 'get',
    url: `/view-frequently-asked-question/${frequentlyAskedQuestionId}`,
  });
