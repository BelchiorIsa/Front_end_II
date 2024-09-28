const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
];

function criarMenu() {
    const header = document.createElement('header'); // Cria um elemento <header>
    const nav = document.createElement('nav'); // Cria um elemento <nav>
    const ul = document.createElement('ul'); // Cria uma lista não ordenada <ul>

    ul.style.display = 'flex'; // Define o display da lista como flex
    ul.style.justifyContent = 'center'; // Centraliza os itens horizontalmente
    ul.style.alignItems = 'center'; // Centraliza os itens verticalmente
    ul.style.gap = '20px'; // Define o espaçamento entre os itens
    ul.style.listStyleType = 'none'; // Remove os marcadores da lista
    ul.style.height = '40px'; // Ajusta a altura da lista

    itensMenu.forEach(item => {
        const li = document.createElement('li'); // Cria um item de lista <li>
        const a = document.createElement('a'); // Cria um link <a>
        a.href = item.url; // Define o atributo href do link
        a.textContent = item.nome.toUpperCase(); // Define o texto do link em caixa alta
        a.style.color = 'white'; // Define a cor do texto do link
        a.style.textDecoration = 'none'; // Remove o sublinhado do link

        li.appendChild(a); // Adiciona o link ao item da lista
        ul.appendChild(li); // Adiciona o item da lista à lista não ordenada
    });

    nav.appendChild(ul); // Adiciona a lista ao <nav>
    header.appendChild(nav); // Adiciona o <nav> ao <header>
    document.body.prepend(header); // Adiciona o <header> ao início do <body>
}

function estilizarMenu() {
    const header = document.querySelector('header'); // Seleciona o <header>
    header.style.backgroundColor = '#071D41'; // Define a cor de fundo do cabeçalho
    header.style.fontFamily = 'Arial, sans-serif'; // Define a fonte do cabeçalho
}

criarMenu(); // Chama a função para criar o menu
estilizarMenu(); // Chama a função para estilizar o menu

