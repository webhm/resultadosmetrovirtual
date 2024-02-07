
import { mande, defaults } from 'mande';
const baseURL = 'https://leadbox.ec/api/callback/landing';


export function leads(data, options) {
    const patients = mande(baseURL);
    return patients.post(data, options);
}

