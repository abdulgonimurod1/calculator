let tombol = document.querySelector(".container-tombol");
let layar = document.querySelector("#layar");
let operator = "";

tombol.addEventListener("click", function(e){
   
    let tombolKlik = e.target;
    let nilaiTombol = tombolKlik.innerText;

    if(nilaiTombol == "C"){
        layar.value = "";
    } else if(nilaiTombol == "<"){
        layar.value = layar.value.slice(0,-1) ;
    } else if(nilaiTombol == "="){
        layar.value = eval(layar.value);
    }else {
        layar.value = layar.value + nilaiTombol;
    }

});