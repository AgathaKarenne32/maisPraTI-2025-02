import { useState } from "react";

function Product() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [products, setProducts] = useState([]); // era '' e deveria ser array
  const [error, setError] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("Todos");

  const handleNameChange = (event) => setProductName(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleAddProduct = (event) => {
    event.preventDefault();

    if (!productName || !price || !description || !category) {
      setError("Por favor, preencha todos os campos!");
      return;
    }
    if (isNaN(price) || Number(price) <= 0) {
      setError("O preço deve ser um valor positivo.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(price).toFixed(2),
      category,
      description,
    };

    setProducts([...products, newProduct]);

    // Limpa os campos e erro
    setDescription("");
    setPrice("");
    setProductName("");
    setCategory("");
    setError("");
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter(
    (product) => categoryFilter === "Todos" || product.category === categoryFilter
  );

  // Pega categorias únicas para o filtro
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>Cadastro de Produtos</h1>

      <form onSubmit={handleAddProduct}>
        <div>
          <label>Nome:</label>
          <input type="text" value={productName} onChange={handleNameChange} />
        </div>

        <div>
          <label>Preço:</label>
          <input type="number" value={price} onChange={handlePriceChange} />
        </div>

        <div>
          <label>Categoria:</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Selecione</option>
            <option value="Eletrônicos">Eletrônicos</option>
            <option value="Roupas">Roupas</option>
            <option value="Calçados">Calçados</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        <div>
          <label>Descrição:</label>
          <textarea value={description} onChange={handleDescriptionChange} />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Adicionar Produto</button>
      </form>

      <hr />

      <div>
        <label>Filtrar por categoria: </label>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <h2>Produtos Cadastrados</h2>
      {filteredProducts.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id} style={{ marginBottom: "15px" }}>
              <strong>{product.name}</strong> — R$ {product.price} — {product.category}
              <br />
              {product.description}
              <br />
              <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Product;
