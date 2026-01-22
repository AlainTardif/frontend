export class HttpClient {
    #api = 'http:localhost:3000'; //Private attribute 

    get(endpoint) {
        return fetch(`${this.#api}/${endpoint}`)
            .then(response => response.json());
    }
}