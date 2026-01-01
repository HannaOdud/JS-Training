function setup(){
    const whatToConvertDom = document.getElementById("whatToConvert");
    const convertToDom = document.getElementById("convertTo");


    whatToConvertDom.addEventListener("change",() =>{
      convert();
    })

     convertToDom.addEventListener("change",() =>{
      convert(); 
    })
}

function convert(){
        const valueDom = document.getElementById("number");
        const whatToConvertDom = document.getElementById("whatToConvert");
        const convertToDom = document.getElementById("convertTo");
        const resultDom = document.getElementById("result");
        const value = valueDom.value;
        const whatToConvert = whatToConvertDom.value;
        const convertTo = convertToDom.value;
        let result = value;

        if(whatToConvert == "cm"&& convertTo == "inch"){
            result = value/2.54;
        }
        else if(whatToConvert == "inch"&& convertTo == "cm"){
            result = value * 2.54;
        }
        else if(whatToConvert == "cm"&& convertTo == "feet"){
            result = value/30.48;
        }
        else if(whatToConvert == "feet"&& convertTo == "cm"){
            result = value * 30.48;
        }
        else if(whatToConvert == "cm"&& convertTo == "meter"){
            result = value /100;
        }
        else if(whatToConvert == "meter"&& convertTo == "cm"){
            result = value * 100;
        }
        else if(whatToConvert == "inch"&& convertTo == "feet"){
            result = value/12;
        }
        else if(whatToConvert == "feet"&& convertTo == "inch"){
            result = value * 12;
        }
        else if(whatToConvert == "inch"&& convertTo == "meter"){
            result = value * 0.0254;
        }    
    resultDom.textContent = result.toFixed(2);

}





window.onload = setup;