import { ProductService } from './core/services/product-service.js'

const productService = new ProductService()

// Test GET ALL
const testGetAll = async () => {
    const products = await productService.getAll()
    console.table(products)
}

// Test ADD
const testAdd = async () => {
    const newProduct = { name: 'Product 3' }
    const created = await productService.add(newProduct)
    console.log('Created:', created)
}

// Test UPDATE
const testUpdate = async () => {
    const updated = await productService.update(1, { name: 'Alain Updated' })
    console.log('Updated:', updated)
}

// Test DELETE
const testDelete = async () => {
    await productService.delete(3)
    console.log('Deleted!')
}

// Exécution
await testGetAll()
await testAdd()
await testUpdate()
await testDelete()
await testGetAll()


