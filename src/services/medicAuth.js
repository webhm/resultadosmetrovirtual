import { mande, defaults } from 'mande';
const baseURL = 'https://api.hospitalmetropolitano.org/v1';

export function patientAuthValidate(data) {
  const validate = mande(baseURL+'/auth');
  return validate.post(data);
}
export function patientAuthLogin(data) {
    const login = mande(baseURL+'/login');
    return login.post(data);
}

export function patientAuthAccount() {
    const login = mande(baseURL+'/account');
    return login.get();
}

export function patientQuestions(dni) {
    const login = mande(`${baseURL}/qasec?DNI=${dni}`);
    return login.get();
}
export function patientLostPass(dni) {
    const login = mande(`${baseURL}/lostpass?DNI=${dni}`);
    return login.get();
}
export function patientAuthRegister(data) {
    const register = mande(baseURL+'/register');
    return register.post(data);
}
export function patientAuthLostPassApplication(data) {
    const register = mande(baseURL+'/recovery');
    return register.post(data);
}
export function patientAuthLostPassValidate(data) {
    const register = mande(baseURL+'/token');
    return register.post(data);
}
export function patientAuthLostPassChange(data) {
    const register = mande(baseURL+'/lostpass');
    return register.post(data);
}
export function patientSendEmail(data) {
    const register = mande('https://hospitalmetropolitano.org/api/auth/metrovirtual/verify');
    return register.post(data);
}
export function patientSendSuccessPasswordEmail(data) {
    const register = mande('https://hospitalmetropolitano.org/api/auth/password/success');
    return register.post(data);
}

export function patientRegisterValidation(token) {
    const validate = mande(`${baseURL}/auth/verify/${token}`);
    return validate.get();
}
export function patientVerifyValidation(verify) {
    const validate = mande(`${baseURL}/auth/verify/${verify}`);
    return validate.post();
}
export function patientChangePass(data) {
    const validate = mande(`${baseURL}/changepass`);
    return validate.post(data);
}

export function medicAuthSetToken(token) {
    // todos.options will be used for all requests
    defaults.headers.Authorization = token;


}

export function medicAuthClearToken() {
    delete defaults.headers.Authorization;
}
