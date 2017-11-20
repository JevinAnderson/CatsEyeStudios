import { combineReducers } from 'redux';
import contactForm from './contact-form';
import loader from './loader';

export default combineReducers({ contactForm, loader });
