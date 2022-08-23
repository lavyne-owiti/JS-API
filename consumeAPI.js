// let fetches ={
//     method:'GET',
//     body:JSON.stringify(data),
//     Headers:{
//         "content-type":"application/json",
//     },  
// }


fetch('http://localhost:5000/products')
.then(function (response) {
return response.json();
})
.then(function (data) {
    console.log('success', data); 
    const item=document.getElementById('products'); 
    data.map(function(product){
        let li =document.createElement('li');
        li.innerHTML=`${product.name}`;
        item.appendChild(li); 
    })
})
.catch(function (error) {
console.log('error', error);
});


fetch('http://localhost:5000/products/fruits')
.then(function (response) {
return response.json();
})
.then(function (data) {
    console.log('success', data);
    const fruList=document.getElementById('fruList');
    data.map(function(frulist){
        let li =document.createElement('li');
        li.innerHTML=`${frulist.name}`;
        fruList.appendChild(li)
    })
})
.catch(function (error) {
console.log('error', error);
});


fetch('http://localhost:5000/products/vegetables')
.then(function (response) {
return response.json();
})
.then(function (data) {
    console.log('success', data);
    const vegList =document.getElementById('vegList')
    data.map(function(veglist){
        let li =document.createElement('li');
        li.innerHTML=`${veglist.name}`;
        vegList.appendChild(li)
    })
})
.catch(function (error) {
console.log('error', error);
});