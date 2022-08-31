import { clientServices } from "../services/client-services.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", async e => {
    e.preventDefault();
    const name = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    await clientServices.createClient(name, email)
    try {
        window.location.href = '/screens/registro_completado.html'
    } catch (error) {
        console.log(error);
    }
});
