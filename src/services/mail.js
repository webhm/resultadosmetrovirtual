import {mande, defaults} from 'mande';

const baseURL = 'https://api.trx.icommarketing.com';
const key = '7f14b454-8df3-4e75-9def-30e45cab59e9';


export function sendEmailIco(subject, email) {
    const ccEmails = [];
    const bccEmails = [];
    const payload = {
        'Cc': ccEmails,
        'Bcc': bccEmails,
        'Headers': '',
        'TrackLinks': 'HtmlAndText',
        'From': 'metrovirtual@hospitalmetropolitano.org',
        //'Attachments' => $this->attachments,
        'Subject': subject,
        'TrackOpens': true,
        'TextBody': 'probando',
        'ReplyTo': 'metrovirtual@hospitalmetropolitano.org',
        //'HtmlBody' : $mailable->render(),
        'To': email,
        'Tag': '',
    }
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'X-Trx-Api-Key': key,
        }
    };
    const patients = mande(baseURL);
    return patients.post(payload, options);
}