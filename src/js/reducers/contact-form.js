import { SET } from '../constants/contact-form';

const initialState = {};

export default function contactFormReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET:
      return payload;
    default:
      return state;
  }
}
