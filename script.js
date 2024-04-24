const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=notebooks';

fetch(URL)
    .then(response => response.json())
    .then(data => {
        // Manipular os dados recebidos, por exemplo:
        const products = data.results;//produtos vai guardar o resultado da busca da api

        //Selecionar elemento onde os produtos seráo renderizados
        const productListContainer = document.getElementById('product-list');

        //criar uma div para cada produto e renderizar os produtos dentro delas
        products.forEach(product => {//para cada item da lista
            //criar uma div para o produto
            const productDiv = document.createElement('div');
            productDiv.classList.add('product'); //adiciona a div criada em uma classe para facilitar estilização por css

            //criar a imagem do produto
            const image = document.createElement('img');//cria a tag img
            image.src = product.thumbnail;//url da imagem
            image.alt = product.title;//texto alternativo da imagem
            productDiv.appendChild(image);//insere a imagem dentro da div criada            

            //Cria o título do produto
            const title = document.createElement('span');//cria tag span para colocar a informação escrita
            title.textContent = product.title;//coloca um conteudo, o titulo do produto, dentro do span
            productDiv.appendChild(title);//insere o titulo na div criada
            

            //Cria o preço do produto
            const price = document.createElement('span');//cria uma tag span
            price.textContent = ' - R$ ' + product.price.toFixed(2); //coloca o preço formatado
            productDiv.appendChild(price);//insere o preço na div criada
        
            // Inserir a div no contâiner principal
            productListContainer.appendChild(productDiv);
        });
        documento.getElementById('product-list').appendChild(productList);
    })
    .catch(error => {
        console.error('Erro ao obter os dados:', error);
    });
