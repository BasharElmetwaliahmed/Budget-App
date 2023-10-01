
export const getUser=(key)=>{
    const user=JSON.parse(localStorage.getItem(key))
    return user;
}

export const deleteUser=(key)=>{
    localStorage.removeItem(key)
    
}