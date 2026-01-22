export class HttpClient {
    #api = 'http://localhost:3000'; //Private attribute
    
   /**
   * Send a GET request to the endpoint
   * @param {string} endpoint
   * @returns JSON resource (payload)
   */

    get(endpoint) {
        return fetch(
            `${this.#api}/${endpoint}`)
            .then(response => response.json());
    }
}