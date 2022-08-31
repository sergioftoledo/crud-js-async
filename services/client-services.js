const clientList = () => fetch("http://localhost:3000/perfil").then((res) => res.json());

const createClient = (name, email) => {
    return fetch('http://localhost:3000/perfil', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, id: uuid.v4()})
    });
};

export const clientServices = { clientList, createClient }