export const handleAddToCart = (e)=>{
    return {
        type:'addNewCart',
        payload:e
    }
}

export const handleDeleteCart = (e)=>{
    return {
        type:'deleteCart',
        payload:e
    }
}

export const handleIncrementCart = (e)=>{
    return {
        type:'increase',
        payload:e
    }
}

export const handleDecrementCart = (e)=>{
    return {
        type:'decrease',
        payload:e
    }
}