var applyCoupon = (category) => (discount)=>(item)=>{
    if(category!=item.category) return {};
    item.price=item.price*(1-discount);
    return item;
}

const item= {
    "name": "Biscuits",
    "type" : "regular",
    "category" : "food",
    "price" : 2.0
}
console.log(applyCoupon("food")(0.1)(item).price===1.8);