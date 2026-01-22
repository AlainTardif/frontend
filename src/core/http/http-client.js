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
        
        return response.json()
    }

    /**
     * Send a POST request to the endpoint
     * @param {string} endpoint
     * @param {object} data
     * @returns Promise<any>
     * @raise Error if status <> 20x ou 30x
     */
    async post(endpoint, data) {
        const response = await fetch(
            `${this.#api}${endpoint}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        
        if (!response.ok) {
            const error = new Error(`HTTP status ${response.status} : ${response.statusText}`)
            error.status = response.status
            error.response = response
            throw error
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
        console.error(`${error.status} : ${error.message}`)
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
add()
consumer()