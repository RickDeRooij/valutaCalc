 let b = document.getElementById('button').addEventListener("click", function(){
    let a = document.getElementById('input').value;
    dollar.innerHTML = a * 1.1346 ;
    pond.innerHTML = a * 0.8708;
    kronen.innerHTML = a * 7.4608;
});