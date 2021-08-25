window.onscroll = function() {myFunction()};

var navbar = document.getElementById("sticky_navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var inroduction = document.getElementById("inroduction");
var program = document.getElementById("program");
var english_preparation = document.getElementById("english_preparation");
var visa = document.getElementById("visa");
var hebergement = document.getElementById("hebergement");

function myInroductionFunction() {

  inroduction.style.display = 'block';     
  program.style.display = 'none';     
  english_preparation.style.display = 'none';     
  visa.style.display = 'none';     
  hebergement.style.display = 'none';  
  
  // inroduction.style.borderBottom = "0.25rem solid rgb(0, 0, 0)";

}

function myProgramFunction() {

  inroduction.style.display = 'none';     
  program.style.display = 'block';     
  english_preparation.style.display = 'none';     
  visa.style.display = 'none';     
  hebergement.style.display = 'none'; 
}

function myEnglishPreparationFunction() {

  inroduction.style.display = 'none';     
  program.style.display = 'none';     
  english_preparation.style.display = 'block';     
  visa.style.display = 'none';     
  hebergement.style.display = 'none'; 
}

function myVisaFunction() {
  inroduction.style.display = 'none';     
  program.style.display = 'none';     
  english_preparation.style.display = 'none';     
  visa.style.display = 'block';     
  hebergement.style.display = 'none';     

}
function myHebergementFunction() {
  inroduction.style.display = 'none';     
  program.style.display = 'none';     
  english_preparation.style.display = 'none';     
  visa.style.display = 'none';     
  hebergement.style.display = 'block';     


}



window.onload = function() {
  myInroductionFunction();
};