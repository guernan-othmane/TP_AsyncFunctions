async function fetchUserDetails (userId){
    let response = await fetch(`https://dummyjson.com/users/${userId}/orders`)
    let data = await response.json();
    console.log("Voici la listes des users et leurs commandes ")
    console.log(data)
    
}
fetchUserDetails(2)
