export const ADD = (item) => {
    return {
        type : 'ADD_CART',
        payload : item
    }
}

export const DLT = (id) => {
    return {
        type : 'REMOVE_CART',
        payload : id //1
    }
}

export const REMOVE = (iteam) => {
    return {
        type : 'REMOVE_ONE',
        payload : iteam
    }
}