var input = document.querySelector("#inputs");
var display = document.querySelector("#result");
var button = document.getElementById("analyse");

var startWrittingInput = () => document.getElementById('result').innerHTML = "Hey !! remember to check your word";

var polindromeCheker = () =>
    {
        let sentence = input.value;

        if (!sentence) { 
            document.getElementById('result').innerHTML = `<span style='color: #1c1c10;''> Sentence not found, Please check input field </span>`;
            return;
        }

        const countWords = (sentence) => sentence.match(/(\w+)/g).length;
        const countCharacters = (sentence) => sentence.replace(/[^a-zA-Z]/g, "").length;

        const checkPalindrome = (word) => {
            const string = word.replace(/[^a-zA-Z]/g, "").toLowerCase("");
            const organisedWord = string.split("").reverse().join("");
            if (string === organisedWord) return true;
            else return false
        }
        const countPalindromes = ( sentence) => {   
            let word = "";
            let count = 0;
            sentence = sentence + " ";

            for (let i = 0; i < sentence.length; i++) {
                const charact = sentence[i];
                if (charact != ' ')
                    word = word + charact;
                else {
                    if (checkPalindrome(word))
                        count++;
                    word = "";
                }
            }
            
            return count;
        }
        
        function getStats(sentence) {
            display.innerHTML = `
            <span style='color: #1c1c10;''>Number Of Words: ${countWords(sentence)}</span> <br>
            <span style='color: #1c1c10;''>Number Of Characters: ${countCharacters(sentence)}</span> <br>
            <span style='color: #1c1c10;''>Number Of PalindromWords: ${countPalindromes(sentence)}</span> <br><br><br>
            <span style='color: #1c1c10;''> NB : Number Of Common Letters: ${'Will Coming Soon !!'}</span> <br>
            `;

            return {
              numberOfWords: countWords(sentence),
              numberOfCharacters: countCharacters(sentence),
              numberOfPalindromWords: countPalindromes(sentence),
              numberOfWordsWithCommonLetters: 'Coming Soon !!',
            };
        }
          
        const stats = getStats(sentence);
        console.clear();
        console.log(stats);

	}

button.addEventListener("click", polindromeCheker);

