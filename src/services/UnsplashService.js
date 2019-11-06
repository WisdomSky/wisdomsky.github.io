import { of, from } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import axios from 'axios';

const UNSPLASH_CLIENT_ID = '09f59a5b506a27d612abc700a46f52e59d5e8eabfa47320c098a77827c9fc36d';
const API = 'https://api.unsplash.com';




export default class {

    endpoint(action) {
        return `${API}/${action}?client_id=${UNSPLASH_CLIENT_ID}`;
    }

    get(action, params = {}) {

        let flatten_params = "";

        for (let param in params) {

            if (params.hasOwnProperty(param))
                flatten_params += `&${param}=${params[param]}`;
        }


        return of(this.endpoint(action))
                .pipe(
                    flatMap((endpoint) => from(axios.get(endpoint + flatten_params))),
                    map(({ data }) => data)
                );
    }


}