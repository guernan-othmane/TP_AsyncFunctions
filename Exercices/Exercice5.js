async function ProductFilter() {
    try {
        const response = await fetch('https://dummyjson.com/products');

        if (response.status === 200) {
            const products = response.data.products;
            let tableau = `<table border="1">
                <tr> 
                <th>Title</th> 
                <th>Description</th> 
                <th>Price</th> 
                </tr>`

            tableau += products.map(produit => {
                return (
                    `<tr> 
                    <td>${produit.title}</td> 
                    <td>${produit.description}</td>
                    <td>${produit.price}</td>
                    </tr>`
                );
            }).join();

            tableau += `</table>`;

            document.querySelector('.tableau').innerHTML = tableau;
        } else {
            console.log('La requête a échoué avec le statut' + response.status);
        }
    } catch (error) {
        console.log('Il y a eu une erreur' + error);
    }
}

ProductFilter();