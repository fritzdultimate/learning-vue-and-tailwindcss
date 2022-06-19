import { register } from '../server/apis/register.js';

export function useRegister(username, email, password, dob) {
    return register(username, email, password, dob);
}