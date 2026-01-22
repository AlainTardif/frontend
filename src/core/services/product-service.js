import { HttpClient } from '../http/http-client.js'

export class ProductService {
    #httpClient
    #endPoint = 'users'  // ou 'collection'

    constructor() {
        this.#httpClient = new HttpClient()
    }

    /**
     * Get all products
     * @returns Promise<Array<any>>
     */
    async getAll() {
        return this.#httpClient.get(this.#endPoint)
    }

    /**
     * Get one product by id
     * @param {string} id
     * @returns Promise<any>
     */
    async getOne(id) {
        return this.#httpClient.get(`${this.#endPoint}/${id}`)
    }

    /**
     * Add a new product
     * @param {object} product
     * @returns Promise<any>
     */
    async add(product) {
        return this.#httpClient.post(this.#endPoint, product)
    }

    /**
     * Update a product
     * @param {string} id
     * @param {object} product
     * @returns Promise<Response>
     */
    async update(id, product) {
        return this.#httpClient.put(`${this.#endPoint}/${id}`, product)
    }

    /**
     * Delete a product
     * @param {string} id
     * @returns Promise<Response>
     */
    async delete(id) {
        return this.#httpClient.delete(`${this.#endPoint}/${id}`)
    }
}