const ul=document.getElementById('products');
const ulz=document.getElementById('fruList');
const uls =document.getElementById('vegList')
const list=document.createDocumentFragment();

let fetches ={
    method:'GET',
    body:JSON.stringify(data),
    Headers:{
        "content-type":"application/json",
    },  
}
fetch('https://localhost:5000/products',fetches)
.then(function (response) {
return response.json();
})
.then(function (data) {
    let products=data;
    products.map(function(product){
        let li =document.createElement('li');
        let x=document.createTextNode(product.name);
        li.appendChild(x);
        list.appendChild(li)
    })
console.log('success', data);
})
.catch(function (error) {
console.log('error', error);
});
ul.appendChild(list)

fetch('https://localhost:5000/products',fetches)
.then(function (response) {
return response.json();
})
.then(function (data) {
    let fruList=data;
    fruList.map(function(frulist){
        let li =document.createElement('li');
        let y=document.createTextNode(frulist.name);
        li.appendChild(y);
        list.appendChild(li)
    })
console.log('success', data);
})
.catch(function (error) {
console.log('error', error);
});
ulz.appendChild(list)

fetch('https://localhost:5000/products',fetches)
.then(function (response) {
return response.json();
})
.then(function (data) {
    let vegList=data;
    vegList.map(function(veglist){
        let li =document.createElement('li');
        let z=document.createTextNode(veglist.name);
        li.appendChild(z);
        list.appendChild(li)
    })
console.log('success', data);
})
.catch(function (error) {
console.log('error', error);
});
uls.appendChild(list)