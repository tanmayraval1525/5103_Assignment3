const $ = (selector)=>{
    return document.querySelector(selector);
};

const focusOn = (selector)=>{
    $(selector).focus();
};

const validateEmail = (email)=>{
    return (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(email);
}

const validateForm=(e)=>{

    $("#filter-arrivaldate").textContent="";
    $("#filter-nights").textContent = "";
    $("#filter-name").textContent = "";
    $("#filter-email").textContent ="";
    $("#filter-phone").textContent = "";

    let arrivaldate = $("#arrivaldate").value;
    let nights = $("#nights").value;
    let name = $("#name").value;
    let email = $("#email").value;
    let phone = $("#phone").value;
    let flag = false;

    if (arrivaldate == ""){
        $("#filter-arrivaldate").textContent = "This field is required.";
        flag = true;
    }

    if (nights == ""){
        $("#filter-nights").textContent = "This field is required.";
        flag = true;
    }

    if (name == ""){
        $("#filter-name").textContent = "This field is required.";
        flag = true;
    }

    if (email == ""){
        $("#filter-email").textContent = "This field is required.";
        flag = true;
    }

    if (phone == ""){
        $("#filter-phone").textContent = "This field is required.";
        flag = true;
    }

    if (isNaN(nights)){
        $("#filter-nights").textContent = "Must be numeric.";
        flag = true;
    }

    if (validateEmail(email)==false){
        $("#filter-email").textContent = "Must be a valid email address.";
        flag = true;
    }

    if (isNaN(phone) || (/[0-9]{10}/).test(phone) == false){
        $("#filter-phone").textContent = "Must be a valid phone number.";
        flag = true;
    }

    if(flag){
        e.preventDefault();
        if ($("#filter-arrivaldate").textContent != ""){
            focusOn("#arrivaldate");
        }

        if ($("#filter-nights").textContent != ""){
            focusOn("#nights");
        }

        if ($("#filter-name").textContent != ""){
            focusOn("#name");
        }

        if ($("#filter-email").textContent != ""){
            focusOn("#email");
        }

        if ($("#filter-phone").textContent != ""){
            focusOn("#phone");
        }

    }

};

document.addEventListener("DOMContentLoaded",()=>{
    $("#submit").addEventListener("click",validateForm);
});