$(document).ready(function(){
    $('.checkbtn').click(function(){
        $('ul').toggleClass('show');
    });
});

/********************* for year in user_details page ********************/

const yearSelect = document.getElementById("year");

function populateYears(){
    //Get the current year as a number
    let year = new Date().getFullYear();
    //make the previous 100 years be an option
    for(let i = 0; i < 101; i++){
        const option = document.createElement("option");
        option.textContent = year-i;
        yearSelect.appendChild(option);
    }
}
populateYears();

/******************* for extra option "other" in drop down menu *************/

function toggleOther(){
    var deg = document.getElementById('toToggle');
    var strUser = deg.options[deg.selectedIndex].text;

    if (strUser == 'Other'){
        document.getElementById('extra-option').disabled = false;
    }else{
        document.getElementById('extra-option').disabled = true;
    }
}
