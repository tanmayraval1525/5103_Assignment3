const $ = (selector)=>{
    return document.querySelector(selector);
};

const processEntry = (e)=>{
    let income = $("#income").value;

    if (isNaN(income) || income < 0){
        alert("Enter valid Income");
    }
    else{
        $("#taxowed").value=calculateTax(income);
        e.preventDefault();
    }
    $("#income").focus();
    
};

const calculateTax=(income)=>{
    let inc = parseInt(income);

    if (inc <= 9875){
        return (inc*0.1).toFixed(2);
    }
    else if (inc <= 40125){
        return (((inc-9875)*0.12)+987.50).toFixed(2);
    }
    else if (inc <= 85525){
        return (4617.50+((inc-40125)*0.22)).toFixed(2);
    }
    else if (inc <= 163300){
        return (14605.50+((inc-85525)*0.24)).toFixed(2);
    }
    else if (inc < 207350){
        return (33271.50+((inc-163300)*0.32)).toFixed(2);
    }
    else if (inc < 518400){
        return (47367.50+((inc-207350)*0.35)).toFixed(2);
    }
    else{
        return (156235+((inc-518400)*0.37)).toFixed(2);
    }
};
    


document.addEventListener("DOMContentLoaded",()=>{
    $("#submit").addEventListener("click",processEntry);
});