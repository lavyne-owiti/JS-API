fetch('https://localhost:5000/products',{
    method:'GET',
    Headers:{
        "content-type":"application/json",
    },  
})
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log('success', data);
})
.catch(function (error) {
console.log('error', error);
});