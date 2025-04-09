function calculateBMI() {
    let inputWeight = document.querySelector('.input-1').value;
    let inputHeight = document.querySelector('.input-2').value;

    let inputHeightInMeter = inputHeight / 100;
    let inputHeightInMeterSqure = inputHeightInMeter * inputHeightInMeter;

    let BMI =  (inputWeight / inputHeightInMeterSqure).toFixed(1);

    console.log(BMI)

    document.querySelector('.result').innerHTML = BMI;
}

