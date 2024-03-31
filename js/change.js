const $ = (selector)=>{
    return document.querySelector(selector);
};

const makeChange=(amount)=>{
    let quarters = parseInt(amount/25);
    let dimes = parseInt((amount-quarters*25)/10);
    let nickels = parseInt((amount-(quarters*25 + dimes*10))/5);
    let pennies = amount-(quarters*25 + dimes*10 + nickels*5);
    $("#quarters").value=quarters;
    $("#dimes").value=dimes;
    $("#nickels").value=nickels;
    $("#pennies").value=pennies;
    
};

const processEntry = (e) =>{
    let amount = $("#amount").value;
    if(isNaN(amount) || amount < 0 || amount > 99){
        alert("Enter valid amount");
    }
    else{
        makeChange(amount);
        e.preventDefault();
    }
};

document.addEventListener("DOMContentLoaded",()=>{
    $("#submit").addEventListener("click",processEntry);
});

