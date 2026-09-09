import { useState, useEffect } from "react";

function App() {


    const [usuarios, alteraUsuarios] = useState([])
    const [pesquisa, alteraPesquisa] = useState("")

    async function buscarTodos(){
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        console.log(data);
        alteraUsuarios(data.users);

    }

    async function buscarNome(nome){
        const response = await fetch("https://dummyjson.com/users/search?q=" + nome);
        const data = await response.json();
        console.log(data);
        alteraUsuarios(data.users)
    }


function mostrarInfo(usuario){
    alert("Telefone " + usuario.phone + " Email: " + usuario.email + "\n" + "Mora em " + usuario.address.city)
}

useEffect( ()=>{
    buscarTodos()
}, [] )

    return (
        <div>

        <h1>Consumo da API</h1>
        <p>Buscando dados da API DummyJSON</p>

        <input onChange={e => alteraPesquisa(e.target.value)} placeholder="Buscar usuário"/>
        <button onClick={()=> buscarNome(pesquisa)}>🔎Pesquisar...</button>

        <ul>
            
            {
                usuarios.length === 0 ?
                    <p>Lista Vazia</p>
                :   
                usuarios.map(
                    i => <li><img src={`https://ui-avatars.com/api/?background=random&name=${i.firstName}&size=40&rounded=true`}/>{i.gender == `male`? `Sr.` : `Sra.`}. {i.firstName} tem {i.age} anos.<button onClick={() => mostrarInfo(i)}>Ver informações</button> </li>
                )


                
            }
        
           
        </ul>
        
        </div>
    );
}

export default App;