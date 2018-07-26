import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import axios from 'axios';

const UNSPLASH_CLIENT_ID = '09f59a5b506a27d612abc700a46f52e59d5e8eabfa47320c098a77827c9fc36d';
const API = 'https://api.unsplash.com';




export default class {

    endpoint(action) {
        return `${API}/${action}?client_id=${UNSPLASH_CLIENT_ID}`;
    }

    get(action) {
        return Observable
            .of(this.endpoint(action))
            .flatMap((endpoint) => Observable.fromPromise(axios.get(endpoint)))
            .map(({ data }) => data);
    }


}