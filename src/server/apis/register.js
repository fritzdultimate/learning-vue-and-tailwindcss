// register user with username, email, password and date of birth
export async function register(username, email, password, dob) {
    const user = new Moralis.User();

    user.set('username', username);
    user.set('password', password);
    user.set('email', email);
    user.set('dob', dob);

    const result = await user.signUp();
        
    return result;
}