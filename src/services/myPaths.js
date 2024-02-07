
import { mande, defaults } from 'mande';
const baseURL = 'https://api.hospitalmetropolitano.org/v1/paciente/cirugias';
const baseURL2 = 'https://api.hospitalmetropolitano.org/v2/pacientes/notificaciones/register';

export function searchPaths(data) {
    const patients = mande(  baseURL);
    return patients.post(data);
}

export function getSubscribed(nhc) {
    const patients = mande(  `${baseURL2}?NHC=${nhc}`);
    return patients.get();
}

export function addSubscribed(payload, nhc) {
    const patients = mande( `${baseURL2}?NHC=${nhc}`);
    return patients.post(payload);
}

export function updateSubscribed(payload, nhc) {
    const patients = mande( `${baseURL2}?NHC=${nhc}`);
    return patients.put(payload);
}

