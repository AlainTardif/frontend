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
            throw new Error(`${response.status} : ${response.statusText}`)
        }
        
        return response.json()
    }

    /**
     * Send a POST request to the endpoint
     * @param {string} endpoint
     * @param {object} payload
     * @returns Promise<any>
     * @raise Error if status <> 20x ou 30x
     */
    async post(endpoint, payload) {
        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }
        
        const response = await fetch(
            `${this.#api}${endpoint}`,
            init
        )
        
        if (!response.ok) {
            throw new Error(`${response.status} : ${response.statusText}`)
        }
        
        return response.json()
    }
}

// Essayer de communiquer avec le backend
const httpClient = new HttpClient()

const consumer = async () => {
    try {
        const payload = await httpClient.get('users')
        console.table(payload)
    } catch (error) {
        console.error(error.message)
    }
}

const add = async () => {
    const newProduct = {
        name: "Product 2"
    }
    
    const productCreated = await httpClient.post('users', newProduct)
    console.log(productCreated)
}

// Call the functions
await add()       // Attend que add() finisse
await consumer()  // Puis exécute consumer()
