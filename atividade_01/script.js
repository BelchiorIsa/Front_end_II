const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
];

function criarMenu() {
    const header = document.createElement('header');
    const nav = document.createElement('nav'); 
    const ul = document.createElement('ul'); 

    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';
    ul.style.alignItems = 'center'; 
    ul.style.gap = '20px';
    ul.style.listStyleType = 'none'; 
    ul.style.height = '40px';

    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url; 
        a.textContent = item.nome.toUpperCase(); 
        a.style.color = 'white'; 
        a.style.textDecoration = 'none'; 

        li.appendChild(a);
        ul.appendChild(li); 
    });

    nav.appendChild(ul);
    header.appendChild(nav); 
    document.body.prepend(header); 
}

function estilizarMenu() {
    const header = document.querySelector('header'); 
    header.style.backgroundColor = '#071D41'; 
    header.style.fontFamily = 'Arial, sans-serif';
}

criarMenu(); 
estilizarMenu(); 

