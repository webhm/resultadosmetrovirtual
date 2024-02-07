import {mande, defaults} from 'mande';

const baseURL = 'https://api.hospitalmetropolitano.org/v1';

export function searchInvoices(data) {
    const patients = mande(`${baseURL}/paciente/facturas`, );
    return patients.post(data);
}

export function getInvoiceDoc(type, num) {
    const patients = mande(baseURL);
    return patients.get(`factura/${type}/${num}`);
}

