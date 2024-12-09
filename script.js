let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let code = document.getElementById("code");
let rgb1 = '#0f63e2';
let rgb2 = '#a8eb12';
let copyText = document.getElementById("copyCode");


let hexValues = () => {
  let myHexValues = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + myHexValues[Math.floor(Math.random() * 16)];
  }
  return color;
};

const handleButton1 = () => { 
     rgb1= hexValues();
   document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1},
        ${rgb2}`;
     code.innerHTML= ` background-image: linear-gradient(to right top, ${rgb1},
     ${rgb2})`;
     btn1.innerHTML=rgb1;

};

const handleButton2 = () => { 
     rgb2= hexValues();
     document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1},
     ${rgb2}`;
     code.innerHTML= ` background-image:  linear-gradient(to right top,${rgb1} ,
     ${rgb2})`;
     btn2.innerHTML=rgb2;

     
 };



   function copyCode() {
    
     
   
    
      // Copy the text inside the text field
     navigator.clipboard.writeText(code.innerText);
   
     // Alert the copied text
     alert("Copied the text: " + code.innerText);
   }

copyText.addEventListener("click",copyCode)

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click",handleButton2);
