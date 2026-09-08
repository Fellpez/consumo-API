import { useState } from "react";

function App() {


    const [usuarios, alteraUsuarios] = useState([])

    async function buscarTodos(){
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        console.log(data);
        alteraUsuarios(data.users);

    }


function mostrarInfo(usuario){
    alert("Telefone " + usuario.phone + " Email: " + usuario.email + "\n" + "Mora em " + usuario.address.city)
}

    return (
        <div>

        <h1>Consumo da API</h1>
        <p>Buscando dados da API DummyJSON</p>

        <ol>
            {
                usuarios.length === 0 ?
                    <button onClick={buscarTodos}>Carregar dados</button>
                :
                usuarios.map(
                    i => <li>Sr(a). {i.firstName} tem {i.age} anos.<button onClick={() => mostrarInfo(i)}>Ver informações</button> </li>
                )

            }
           
        </ol>
        
        </div>
    );
}

export default App;