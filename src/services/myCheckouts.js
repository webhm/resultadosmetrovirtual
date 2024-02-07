
import { mande, defaults } from 'mande';
const baseURL = 'https://api.hospitalmetropolitano.org/v1/paciente/notas-egreso';

export function searchCheckouts(data) {
    const patients = mande(baseURL);
    return patients.post(data);
}

