async function fetchData(category) {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        let filteredProducts = await data.products.filter(product => product.category === category);

        console.log("Affichage des données des produits filtrés", filteredProducts);
}

fetchData("home-decoration");
