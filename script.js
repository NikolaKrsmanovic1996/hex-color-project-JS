
   //immidiate invoke funnction

   (function(){
    let button = document.getElementById('btn');
    let hexValue = document.getElementById('hex-value');

    button.addEventListener('click',createHex);

    function createHex(){
        let hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        //here i said that i will add all random elements from hexValues into hexColor but first it must be '#' and that hashTag is position
        let hexColor = '#';
    //here  i said to loop it to 6 0 is '#'
        for(let i = 0;i<6;i++){
            let random = Math.floor(Math.random()* hexValues.length);
            //add them randomly into the value hexColor that hexColor represents now all colors from list
            hexColor += hexValues[random];
        }
        document.body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;
    }

    
   })();

