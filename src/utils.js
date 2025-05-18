
  
export const getFavorites = () => {
  
const favorites = JSON.parse(localStorage.getItem('favorites'));

  
if (!favorites) return [];

  
return favorites.filter(item => item !== null && item !== undefined);
 };

  export const addFavorite =item => {
    console.log(item);
    let favorites = getFavorites()
    const isExist = favorites.find(b => b.id === item.id)
    if (isExist) return alert('Already Added!')
   
  
    favorites.push(item)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    
  }
  export const removeFavorite = (id) => {
    let favorites = getFavorites()
    const remaining = favorites.filter(b => b.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
   
  }