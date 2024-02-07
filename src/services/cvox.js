
import { mande, defaults } from 'mande';
const baseURL = 'https://apicvox.hospitalmetropolitano.org/crmcontactvox/service/v4_1/rest.php';


export function auth(data) {
    const login = mande(baseURL);
    return login.post(data);
}

