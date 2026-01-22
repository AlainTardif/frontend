export class HttpClient {
    #api = 'http://localhost:3000/'; //Private attribute
    
   /**
   * Send a GET request to the endpoint
   * @param {string} endpoint
   * @returns Promise<Response>
   */

    get(endpoint) {
        return fetch(
            `${this.#api}${endpoint}`
        )
    }
} 

// Essayer de communiquer avec le backend
const httpClient = new HttpClient()

const consumer = async () => {
     const response = await httpClient.get('users')
     console.log(`Response status: ${response.status}` )
     const payload = await response.json()
     console.table(payload)
     
}

// Call the function
consumer()