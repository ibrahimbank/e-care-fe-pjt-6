import { signUpUser, responseTemplate } from "./libs/auth/auth-util";
import initSignUp from "./libs/auth/initSignUp";
import initCompleteSignUp from "./libs/auth/completeSignUp";
// const mainContainer = document.querySelector(".acct__main");
export let userDataMain = {
  user: {
    username: null,
    email: null,
    password: null,
  },
  phone_number: null,
};

export let userDataOther = {
  first_name: null,
  last_name: null,
  other_name: null,
  address: null,
  gender: null,
  date_of_birth: null,
  city: null,
  lga: null,
  state: null,
  address: null,
};

function signUp() {
  signUpUser(data, "patient")
    .then(function (response) {
      console.log(response);
      // mainContainer.innerHTML = responseTemplate();
    })
    .catch(function (error) {
      // mainContainer.innerHTML = responseTemplate("error");
      console.log(error);
      console.log(error.response);
    });
}
export function CreateAccount() {
  initSignUp();
  initCompleteSignUp();
}
