import { SET } from '../constants/contact-form';

const endpoint = 'http://api.jevinanderson.com/cats-eye-studios/contact';

const initialState = {
  first: '',
  last: '',
  email: '',
  phone: '',
  address: '',
  session: 'Business Headshot',
  referrer: '',
  comments: '',
  contactPreference: 'email'
};

export default function contactFormReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET:
      return payload;
    default:
      return state;
  }
}
