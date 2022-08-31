const clientList = () => fetch("http://localhost:3000/perfil").then((res) => res.json());

const createClient = async (name, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, id: uuid.v4()})
    });
};

const deleteClient = id => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'DELETE'
    })
}

const clientDetail = id => fetch(`http://localhost:3000/perfil/${id}`).then(res => res.json());

const clientUpdate = async (name, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
    .then(res => res)
    .catch(err => console.log(err))
}

export const clientServices = { clientList, createClient, deleteClient, clientDetail, clientUpdate }