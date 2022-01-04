  
  function compute()
  {
        var p = document.getElementById("principal");
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

    if(principal <= 0){
        alert("Enter a positive number");
        p.focus();
        return false
    }

        result = document.getElementById("result");
        result.innerHTML= "If you deposit <span class='hl'>" + principal + "</span>,\<br\>at an interest rate of <span class='hl'>" + rate + "%</span>\<br\>You will receive an amount of <span class='hl'>" + interest + "</span>,\<br\>in the year <span class='hl'>" + year + "</span>\<br\>";
    
}


       
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

