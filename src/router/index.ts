import { createRouter, createWebHistory } from 'vue-router'
import Routes from '../modules/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...Routes
  ]
});
const LOGIN = 'LoginView';

// function isLoginPage(to){
//   return to.name == LOGIN
// }
// function isAuthPage(to){
//     const authPages = new Set(["RegistrationView", "VerifyAccountView", "ForgotPasswordView", "ChangePasswordView"]);
//     return authPages.has(to.name);
// }
// function isAuthenticated(){
//    return Moralis.User.current();
// }
// router.beforeEach((to, from) => {
//     let isDashboard = to.meta.hasOwnProperty('dashboard');
//     if(isDashboard && !isLoginPage(to)){
// 		if(!isAuthenticated()){
//             return {name: 'LoginView'}
// 		} else {
// 			return true;
// 		} 
//     } else if(isAuthPage(to) && isAuthenticated()) {
//         return {name: 'UserDashboardView'}
//     } else {
//         return true;
//     }
// });

export default router
