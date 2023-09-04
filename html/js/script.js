var span = document.querySelector(".sp")
var res = document.getElementsByClassName("resultado")

function submit() {
    var bola1 = document.getElementsByClassName("fiel1")
    if (bola1) {  
        bola1 = Number(bola1.value)
        bola1 = 1  
        res.innerHTML = `You selected ${bola1} out of 5 `
    }
    
}


    