const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=notebooks';

fetch(URL)
    .then(response => response.json())
    .then(data => {
        // Manipular os dados recebidos, por exemplo:
        const products = data.results;//produtos vai guardar o resultado da busca da api

        // Criar lista de produtos HTML dinamicamente
        const productList = document.createElement('ul');//cria um tag ul no html - lista
        products.forEach(product => {//para cada item da lista
            const listItem = document.createElement('li');//cria uma linha

            //Cria a imagem do produto
            const image = document.createElement('img');//cria a tag img
            image.src = product.thumbnail;//url da imagem
            image.alt = product.title;//texto alternativo da imagem
            listItem.appendChild(image);//insere a imagem dentro do item da lista
             

            //Cria o título do produto
            const title = document.createElement('span');//cria tag span para colocar a informação escrita
            title.textContent = product.title;//coloca um conteudo, o titulo do produto, dentro do span
            listItem.appendChild(title);//insere o titulo dentro do item da lista
            

            //Cria o preço do produto
            const price = document.createElement('span');//cria uma tag span
            price.textContent = ' - R$ ' + product.price.toFixed(2); //coloca o preço formatado
            listItem.appendChild(price);//insere o preço no item da lista
        
        
        
        //// Criar elementos HTML dinamicamente (para poder usar o elemento criado para trazer mais de uma informação, precisa criar tags span e ai atribuir as informações como titulo, preço e tumbnail dentro de cada li)
        // const productList = document.createElement('ul');//cria um tag ul no html
        // products.forEach(product => {//para cada item da lista
        //     const listItem = document.createElement('li');//criar linha da lista
        //     listItem.textContent = product.title;//coloca o titulo do produto nesta linha
        
        productList.appendChild(listItem);//adiciona o listITem a productList criada anteriormente
        });

        // Inserir na página HTML
        document.getElementById('product-list').appendChild(productList);//coloca a productList dentro da div com id product-list
    })
    .catch(error => {
        console.error('Erro ao obter os dados:', error);
    });
