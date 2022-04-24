window.onload = () => {
    let button = document.querySelector("#submit");

    button.addEventListener("click", validateForm);
};

function validateForm(){
    var bmi;
var result = document.getElementById("result");
let height = parseInt(document.getElementById("height").value);
let weight = parseInt(document.getElementById("weight").value);

    document.getElementById("weight").textContent = weight + " kg";
    document.getElementById("height").textContent = height + " cm";
  
    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    result.textContent = bmi;

    if(height.value=='' || weight.value==''){
        category = "All fields are required!";
        
     } else if(bmi < 18.5){
            category = "Underweight 😒";
            result.style.color = "#ffc44d";
        }
      
      //If BMI is >=18.5 and <=24.9
        else if( bmi >= 18.5 && bmi <= 24.9 ){
            category = "Normal Weight 😍";
            result.style.color = "#0be881";
        }
      
      //If BMI is >= 25 and <= 29.9 
        else if( bmi >= 25 && bmi <= 29.9 ){
            category = "Overweight 😮";
            result.style.color = "#ff884d";
        }
      
      //If BMI is <= 30
        else{
            category = "Obese 😱";
            result.style.color = "#ff5e57";
        }
        document.getElementById("category").textContent = category;
    }
  
 
