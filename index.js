let length = document.getElementById("length");
let wight = document.getElementById("wight");
let result = document.getElementById("result");

function calc() {
  const { wight, length } = {
    wight: document.querySelector("#wight").value,
    length: document.querySelector("#length").value / 100,
  };

  if ((length, wight == "")) {
    result.innerHTML = "enter all data";
    result.style.color = "red";
    return;
  }

  const bmi = wight / (length * length);
  result.style.color = "black";
  
  if (bmi < 16) {
    result.innerHTML = "Severe Thinness";
  } else if (16 < bmi && bmi < 17) {
    result.innerHTML = "Moderate Thinness";
  } else if (17 < bmi && bmi < 18.5) {
    result.innerHTML = "Mild Thinness";
  } else if (18.5 < bmi && bmi < 25) {
    result.innerHTML = "Normal";
  } else if (25 < bmi && bmi < 30) {
    result.innerHTML = "Overweight";
  } else if (30 < bmi && bmi < 35) {
    result.innerHTML = "Obese Class I";
  } else if (35 < bmi && bmi < 40) {
    result.innerHTML = "Obese Class II";
  } else if (bmi > 40) {
    result.innerHTML = "Obese Class III";
  }
}
