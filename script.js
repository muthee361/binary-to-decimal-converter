//variables

const input = document.getElementById('num');
const btnConvert = document.querySelector('.submit');
const displayResults = document.querySelector('.results');

const title = document.querySelector('.btn-convert');
const errSpan = document.getElementById('error');
const leftDropDown = document.getElementById('left');
const rightDropDown = document.getElementById('right');


// loadEventListener();

// function loadEventListener(){
    //convert
    btnConvert.addEventListener('click', convert);


function convert(e){
    let num = input.value;
    errSpan.style.display = 'none';
    if(num === ''){
        errSpan.textContent = 'Input a number';
        errSpan.style.display = 'block';
        setTimeout(clearError, 2000);

              
        
    }else if(num <= '0'){
        errSpan.textContent = 'Number can\'t be negative';
        errSpan.style.display = 'block';
        setTimeout(clearError, 2000);
    }
    else{
        const leftOption = leftDropDown.options[leftDropDown.selectedIndex].text;
        const rightOption = rightDropDown.options[rightDropDown.selectedIndex].text;

        //define convertion to call
        if(leftOption === rightOption) {
            errSpan.textContent = 'Please, check your drop down selection';
            errSpan.style.display = 'block';
            setTimeout(clearError, 2000);
        }
        else if(leftOption === 'Binary' && rightOption === 'Decimal'){
            // input.addEventListener('keydown', function(e){
            //     if(e.key != 48 && e.key != 49 && e.key !=8){
            //         alert('incoreect');
            //         e.preventDefault;
            //     }else{}
            // });
            let decimal = binToDec(num);
            displayResults.innerText = decimal;
            displayResults.style.display = 'block';
        }else{
            decToBinary(parseInt(num));
            
            //decimal to binary convertion
            function decToBinary(y){
                const result = y.toString(2);
                displayResults.innerText = result;
                displayResults.style.display = 'block';
                
            }
        }
        
        
    
    }
    //binary to decimal convertion

    function binToDec(x) {
        let dec = 0;
        for (let i = 0; i < x.length; i++) {
            dec *= 2;
            dec += +x[i];
        }
        return dec;

        
    }

    function clearError(){
        errSpan.style.display = 'none';
        location.reload();
        
    }


    e.preventDefault();
}


