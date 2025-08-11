import {useState} from 'react'

function Product(){

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const handleNameChange = (event) => setProductName(event.tanget.value)
    const handlePriceChange = (event) => setPrice(event.tanget.value)
    const handleCategoryChange = (event) => setCategory(event.tanget.value)
    const handleDescriptionChange = (event) => setDescription(event.tanget.value)

    const handleAddProduct = (event) => {
        event.preventDefault()

        const newProduct = {
            id: Date.now(),
            name: productName,
            price: parseFloat(price).toFixed(2),
            category,
            description
        }

        setProducts([...products, newProduct])

        setDescription('')
        setPrice('')
        setProductName('')
    }

}