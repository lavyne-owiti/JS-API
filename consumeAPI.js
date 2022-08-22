// let fetches ={
//     method:'GET',
//     body:JSON.stringify(data),
//     Headers:{
//         "content-type":"application/json",
//     },  
// }

const item=document.getElementById('products');
fetch('https://localhost:5000/products')
.then(function (response) {
return response.json();
})
.then(function (data) {
    console.log('success', data);  
    data.map(function(product){
        let li =document.createElement('li');
        li.innerHTML=`${product.name}`;
        item.appendChild(li); 
    })
})
.catch(function (error) {
console.log('error', error);
});

const fruList=document.getElementById('fruList');
fetch('https://localhost:5000/products/fruList')
.then(function (response) {
return response.json();
})
.then(function (data) {
    console.log('success', data);
    data.map(function(frulist){
        let li =document.createElement('li');
        li.innerHTML=`${frulist.name}`;
        fruList.appendChild(li)
    })
})
.catch(function (error) {
console.log('error', error);
});

const vegList =document.getElementById('vegList')
fetch('https://localhost:5000/products/vegList')
.then(function (response) {
return response.json();
})
.then(function (data) {
    console.log('success', data);
    
    data.map(function(veglist){
        let li =document.createElement('li');
        li.innerHTML=`${veglist.name}`;
        vegList.appendChild(li)
    })
})
.catch(function (error) {
console.log('error', error);
});