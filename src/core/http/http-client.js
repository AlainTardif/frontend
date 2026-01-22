export class HttpClient {
    #api = 'http://localhost:3000/';
    
    /**
     * Send a GET request to the endpoint
     * @param {string} endpoint
     * @returns Promise<any>
     * @raise Error if status <> 20x ou 30x
     */
    async get(endpoint) {
        const response = await fetch(
            `${this.#api}${endpoint}`
        )
        
        if (!response.ok) {
            const error = new Error(`HTTP status ${response.status} : ${response.statusText}`)
            error.status = response.status
            error.response = response
            throw error
        }
        
        return response.json() // Si tout est bon on retourne le JSON
    }
}

// Essayer de communiquer avec le backend
const httpClient = new HttpClient()

const consumer = async () => {
    try {
        const payload = await httpClient.get('users')
        console.table(payload)
    } catch (error) {
        console.error(`${error.status} - ${JSON.stringify(error.response)}`)
        console.error(`Erreur: ${error.message}`)
    }
}

// Call the function
consumer()