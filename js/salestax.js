const $ = (selector) => {
    return document.querySelector(selector);
}

const validate=(subTotal,taxRate)=>{
    let e="";
    if ( isNaN(subTotal) || subTotal <= 0 || subTotal >=10000){
        e += "Subtotal must be > 0 and < 10000";
    }

    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12){
        e += "\nTax Rate must be > 0 and < 12";
    }
    return e;
};

const processEntries=(e) =>{
    const subTotal = parseInt($("#subtotal").value);
    const taxRate = parseInt($("#taxrate").value);
    

    if (validate(subTotal,taxRate) == ""){
        $("#saletax").value = (subTotal*taxRate*0.01).toFixed(2);

        $("#total").value = (subTotal*(1+(taxRate*0.01))).toFixed(2);
        e.preventDefault();
    }
    else{
        alert(validate(subTotal,taxRate));
    }
    
    
}

const clearsubtotal = ()=>{
    $("#subtotal").value = "";
    $("#subtotal").focus();
}

const cleartaxrate = ()=>{
    $("#taxrate").value = "";
    $("#taxrate").focus();
}

const clear = ()=>{
    clearsubtotal();
    cleartaxrate();
    $("#saletax").value = "";
    $("#total").value = "";
    $("#subtotal").focus();
}

document.addEventListener("DOMContentLoaded",()=>{
    $("#subtotal").focus();
    $("#submit").addEventListener("click",processEntries);
    $("#clear").addEventListener("click",clear);
    $("#subtotal").addEventListener("click",clearsubtotal);
    $("#taxrate").addEventListener("click",cleartaxrate);
});