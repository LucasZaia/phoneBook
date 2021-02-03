function InputVerify() {
    var inp = document.querySelector("#username");
    var inpPwd = document.querySelector("#pwd")
    var spn = document.querySelector("#err");
    var spnpwd = document.querySelector("#errpwd");

    if (inp.value.length == 0) {
        inp.style.border = "2px solid red";
        
        spn.style.color = "red";
        spn.innerHTML = "*Este campo é obrigatório";
        inp.value = "";
    } else {
        inp.style.border = "";
        spn.style.display ="none";
    }
    if (inpPwd.value.length == 0) {
        inpPwd.style.border = "2px solid red";
        spnpwd.style.color = "red";
        spnpwd.innerHTML = "*Este campo é obrigatório";
        inpPwd.value = "";
    }else if (inpPwd.value.length >= 1 && inpPwd.value.length < 6) {
        var spnpwd = document.querySelector("#errpwd");
        spnpwd.style.color = "red";
        spnpwd.innerHTML = "*A senha precisa ter no minimo 6 digitos";
    } 
    else {
        inpPwd.style.border = "";
        spnpwd.style.display = "none";
    }
    
    
}