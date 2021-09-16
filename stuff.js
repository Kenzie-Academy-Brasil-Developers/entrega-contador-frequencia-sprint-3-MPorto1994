
const button = document.getElementById("countButton");


const divToAdd = document.createElement('p')
let typedText = document.getElementById("textInput");
let typedTextContent= '';

divToAdd.innerText = typedText.value;
      console.log(divToAdd);
      
console.log(typedText.value)

// Isto muda todas as letras para minúsculas



// typedText = typedText.replace(/[^a-z'\s]+/g, ""); 

// Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
// Iremos aprender mais sobre como usar a função replace numa lição mais à frente.
function letters () {
   
   const pToAdd = document.createElement('p');
   let typedText = document.getElementById("textInput");

   typedTextContent = typedText.value;

   let lettersInside  = document.getElementById("lettersDiv");
   lettersInside.appendChild(pToAdd);

   const letterCounts = {};

   for (let i = 0; i < typedTextContent.length; i++) {
      let currentLetter = typedTextContent[i];
      if (letterCounts[currentLetter] === undefined) {
         letterCounts[currentLetter] = 1; 
      } 
      else { 
         letterCounts[currentLetter]++; 
      }
   }
   for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]}, `;
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span); 
   }
}

function words () {
   typedTextContent = typedText.value;
   console.log(typedTextContent);
   let words1 = typedTextContent.split(/\s/);
   console.log(words1)

   const wordsCounts = {};

   for (let i = 0; i < words1.length; i++) {
      
      let currentWord = words1[i];
      console.log (currentWord)
      if (wordsCounts[currentWord] === undefined && currentWord !=" " ) {
         wordsCounts[currentWord] = 1;
      }
      else {
         wordsCounts[currentWord]++;
      }
   }console.log(wordsCounts)
   for (let word in wordsCounts) {
      const span = document.createElement("span");
      const wordsContent = `"${word}": ${wordsCounts[word]}, `;
      span.innerText = wordsContent; 
      const words1 = document.getElementById("wordsDiv");
      // words1 = typedText.split(/\s/);
      words1.appendChild(span);
      
   }
}

button.addEventListener("click", letters);
button.addEventListener("click", words);
   