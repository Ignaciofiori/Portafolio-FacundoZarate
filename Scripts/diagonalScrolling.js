

document.addEventListener('DOMContentLoaded', (event) => {
    window.scrollTo(0, 0); // Asegura que la página comience desde la esquina superior izquierda

    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = Math.sign(e.deltaY);

        window.scrollBy({
            top: delta 100, // Ajusta el valor para cambiar la velocidad del scroll vertical
            left: delta * 100, // Ajusta el valor para cambiar la velocidad del scroll horizontal
            behavior: 'smooth'
        });
    });
});
GPT-3.5 Turbo
