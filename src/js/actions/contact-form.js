import { SET } from '../constants/contact-form';
import { set } from '../utilities/actions';

export const setContactFormData = data => set(SET, data);
