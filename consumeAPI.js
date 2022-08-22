

// let fetches ={
//     method:'GET',
//     body:JSON.stringify(data),
//     Headers:{
//         "content-type":"application/json",
//     },  
// }
fetch('https://localhost:5000/products')
.then(function (response) {
return response.json();
})
.then(function (data) {
    console.log('success', data);
    const item=document.getElementById('products');
    data.map(function(product){
        let li =document.createElement('li');
        li.innerText=`${product.name}`;
        item.appendChild(li); 
    })
})
.catch(function (error) {
console.log('error', error);
});


fetch('https://localhost:5000/products/fruList')
.then(function (response) {
return response.json();
})
.then(function (data) {
    console.log('success', data);
    const item=document.getElementById('fruList');
    data.map(function(frulist){
        let li =document.createElement('li');
        li.innerText=`${frulist.name}`;
        item.appendChild(li)
    })
})
.catch(function (error) {
console.log('error', error);
});


fetch('https://localhost:5000/products/vegList',fetches)
.then(function (response) {
return response.json();
})
.then(function (data) {
    console.log('success', data);
    const item =document.getElementById('vegList')
    data.map(function(veglist){
        let li =document.createElement('li');
        li.innerText=`${veglist.name}`;
        item.appendChild(li)
    })
})
.catch(function (error) {
console.log('error', error);
});