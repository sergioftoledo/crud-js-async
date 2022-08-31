import { clientServices } from "../services/client-services.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientServices.createClient(name, email)
        .then((res) => {
            window.location.href = '/screens/registro_completado.html'
        })
        .catch((err) => console.log(err));
});
