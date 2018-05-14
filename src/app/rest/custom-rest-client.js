import { jsonServerRestClient, fetchUtils } from 'admin-on-rest';
import sha256 from 'sha256';

export default (apiUrl) => {
    const myHttpClient = (url, options = {}) => {
        const newOptions = { ...options };

        if (newOptions.body) {
            const body = JSON.parse(newOptions.body);

            if (body.password) {
                body.password = sha256(body.password);
                newOptions.body = JSON.stringify(body);
            }

        }

        return fetchUtils.fetchJson(url, newOptions);
    };

    return jsonServerRestClient(apiUrl, myHttpClient);
};
