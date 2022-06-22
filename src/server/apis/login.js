// register user with username, email, password and date of birth
export async function login(username, password) {
        const result = await Moralis.User.logIn(username, password);
        return result;
}