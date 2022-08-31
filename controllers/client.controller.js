import { clientServices } from "../services/client-services.js";

const createNewLine = (name, email) => {
    const line = document.createElement("tr");
    const content = `
    <td class="td" data-td>${name}</td>
    <td>${email}</td>
    <td>
        <ul class="table__button-control">
            <li>
                <a href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit">Editar</a>
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button">
                    Eliminar
                </button>
            </li>
        </ul>
    </td>`;
    line.innerHTML = content;
    return line;
};

const table = document.querySelector("[data-table]");

clientServices.clientList()
    .then((data) => {
        data.forEach((profile) => {
            const newLine = createNewLine(profile.name, profile.email);
            table.appendChild(newLine);
        });
    })
    .catch((error) => alert("Ocurrió un error"));
