//AFFICHAGE DE TOUTES LES DONEES

// async function fetchData(){
//     let response = await fetch(`https://dummyjson.com/users`);
//     let data = await response.json();
//     console.log(data);
//     return data
// }
// console.log("debut de recuperation des donnees");
// fetchData();

//AFFICHAGE DES DONEES specifies

// async function fetchData(userId){
//     let response = await fetch(`https://dummyjson.com/users/${userId}`);
//     let data = await response.json();
//     console.log(data.lastName,data.firstName);
//     return data
// }
// console.log("debut de recuperation des donnees");
// fetchData(22);

async function fetchData(userId){
    try{
    let response = await fetch(`https://dummyjson.com/users/${userId}`);
    let data = await response.json();
    console.log("debut de recuperation des donnees");
    console.log(data.lastName,data.firstName);
    
    }
   catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
}
}
fetchData(1);




