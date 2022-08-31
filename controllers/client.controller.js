import { clientServices } from "../services/client-services.js";

const createNewLine = (name, email, id) => {
    const line = document.createElement("tr");
    const content = `
    <td class="td" data-td>${name}</td>
    <td>${email}</td>
    <td>
        <ul class="table__button-control">
            <li>
                <a href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit">Editar</a>
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button" id=${id}>
                    Eliminar
                </button>
            </li>
        </ul>
    </td>`;
    line.innerHTML = content;
    const btn = line.querySelector('button');
    btn.addEventListener('click', () => {
        clientServices.deleteClient(id)
        .then( res => {
            console.log('eliminado', res)
        })
        .catch(err => console.log('ocurrió un error'))
    })
    return line;
};

const table = document.querySelector("[data-table]");

clientServices.clientList()
    .then((data) => {
        data.forEach(({ name, email, id }) => {
            const newLine = createNewLine(name, email, id);
            table.appendChild(newLine);
        });
    })
    .catch((error) => alert("Ocurrió un error"));
