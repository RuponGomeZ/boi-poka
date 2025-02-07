const getStoredReadList = () => {
    //  read-list
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        //already exists. Wont add it
        alert(" already exist in the read list");
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return []
    }
}

const addToStoredWishList = (id) => {
    const StoredWishList = getStoredWishList();
    if (StoredWishList.includes(id)) {
        alert(id, "already wishlisted");
    } else {
        StoredWishList.push(id);
        const storedWishListStr = JSON.stringify(StoredWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}

export { addToStoredReadList, addToStoredWishList }