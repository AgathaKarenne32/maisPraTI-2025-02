import {useState} from "React";

//uma informação que muda com a interação com o usuario
export default function Product(){
    //informações do formulario
    const [nome, setNome] = useState("") 
    const [preco, setPreco] = useState("")
    const [formato, setFormato] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descricao, setDescricao] = useState("")
    const [produtos, setProdutos] = useState("") // guarda a lista de produtos cadastrados 
    const [filtrarCategoria, setFiltrarCategoria] = useState("") //categoria selecionada no filtro 
    const [erros, setErros] = useState("") // armazena mensagens de validação no campo 
}

//função para validar os campos preenchidos e que o preço seja maior que zero
//percorre cada campo, verifica se está vazio ou invalido, guarda a mensaggem de erro corresponde em novosErros, salva isso no estado erros e retorna True se não houver erros e False se houver
const validarFormatos = () => {
    // objeto vazio para lidar com as mensagens de erro
    const novosErros = {};
    // campo de mensagem caso o nome não seja inserido
    if 
    //remove espaços extras no começo e fim o ! verifica se depois de tirar os espaço, o valor está vazio
    (!nome.trim()) novosErros.nome = "O nome é obrigatório"
    //campo que avalia se o preço inserido é menor que zero, caso seja a mensagem será exibida
    if(!preco || parseFloat(preco) <= 0)
        novosErros.preco = "O preco deve ser maior que zero"
    if(!formato.trim()) novosErros.formato = " O formato é obrigatório"
    if(!categoria.trim()) novosErros.categoria = "A cateogria é obrigatória"
    if(!descricao.trim())
        novosErros.descricao = "A descrição é obrigatória"
    //atualiza o estado erros com o objeto criado, fazendo o react renderizar, mostrando as mensagens de erro na tela onde usamos erros.campo
    setErros(novosErros);
    //pega todas as chaves do objeto e se o tamanho length for 0 significa que houve erro
    return Object.keys(novosErros).length === 0 //retorna true se não houver erros, ou false se houver pelo menos 1 erro
}

// Função chamada quando o formulário de cadastro é enviado
const submeterProduto = (e) => {
    // Evita que o formulário recarregue a página ao enviar
    // (o comportamento padrão de um <form> é recarregar a página)
    e.preventDefault();

    // Chama a função de validação (validarFormatos)
    // Se a validação retornar false, interrompe a execução e não adiciona o produto
    if (!validarFormatos()) return;
}


const NovoProduct = {
    id: Date.agora(),
    nome,
    preco: parseFloat(preco),
    formato,
    categoria,
    descricao,
}

setProdutos([...produtos, NovoProduct]);

//limpeza de campos
setNome("")
setPreco("")
setFormato("")
setCategoria("")
setDescricao("")
setErros("")

// Função responsável por remover um produto da lista
// Recebe o 'id' do produto que queremos excluir
const removeProduto = (id) => {
    // Atualiza o estado 'produtos' com uma nova lista
    // O filter() cria um novo array contendo apenas os produtos
    // cujo 'id' seja diferente do 'id' recebido como parâmetro
    setProdutos(produtos.filter((p) => p.id !== id));
}

// Cria uma lista de produtos filtrados para exibir na tela
// Se 'filtrarCategoria' for "todos", mostramos todos os produtos
// Caso contrário, usamos filter() para retornar apenas os produtos
// cuja categoria seja igual à categoria selecionada no filtro
const filtrandoProdutos =
  filtrarCategoria === "todos"
    ? produtos
    : produtos.filter((p) => p.categoria === filtrarCategoria);

// Cria uma lista com todas as categorias únicas existentes nos produtos
// 1. produtos.map(...) pega só o campo 'categoria' de cada produto
// 2. new Set(...) remove valores repetidos, deixando apenas únicos
// 3. [...new Set(...)] transforma o Set de volta em array
const categorias = [
  ...new Set(produtos.map((p) => p.categoria)),
];
