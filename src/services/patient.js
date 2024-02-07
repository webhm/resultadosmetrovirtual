import { mande } from 'mande';
const baseURLV1 = 'https://api.hospitalmetropolitano.org/v1';
const baseURLV2 = 'https://api.hospitalmetropolitano.org/t/v1';


export function resultadosLaboratorioPaciente(req) {
  try{
    const patients = mande(  `${baseURLV1}/resultados/lab`);
    return patients.post(req);
  }catch (e) {
    console.log('er', e);
    console.log('er', e.status);
    console.log('er', e.statusCode);
  }
}

export function resultadosImagenPaciente(req) {
  const patients = mande(  `${baseURLV1}/resultados/imagen`);
  return patients.post(req);
}

export function historialAtencionesPaciente(req) {
  const patients = mande(  `${baseURLV1}/paciente/atenciones`);
  return patients.post(req);
}

export function urlDocumento(url) {
  const patients = mande(  url);
  return patients.get('');
}
export function urlIframe(data) {
  const patients = mande(  `${baseURLV2}/check-point-rx`);
  return patients.post(data);
}

