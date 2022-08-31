import { clientServices } from "../services/client-services.js";

const form = document.querySelector('[data-form]');

const obtainInfo = async () => {
    const url = new URL (window.location);
    const id = url.searchParams.get('id');

    if (id === null) {
        window.location.href  = '/screens/error.html';
    }

    const nameInput = document.querySelector('[data-nombre]');
    const emailInput = document.querySelector('[data-email]');
    
    
    try {
        const { name, email } = await clientServices.clientDetail(id);
        if (name && email) {
            nameInput.value = name;
            emailInput.value = email;
        } else {
            throw new Error
        }
        
    } catch (error) {
        window.location.href = '/screens/error.html'
    }
}

obtainInfo();

form.addEventListener('submit', async e => {
    e.preventDefault();
    
    const url = new URL (window.location);
    const id = url.searchParams.get('id');

    const nameInput = document.querySelector('[data-nombre]').value;
    const emailInput = document.querySelector('[data-email]').value;

    
    await clientServices.clientUpdate(nameInput, emailInput, id)
    window.location.href = '/screens/edicion_concluida.html'
})