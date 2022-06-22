import { login } from '../server/apis/login.js';


export function useLogin(username, password) {
    return login(username, password);
}