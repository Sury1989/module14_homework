function pageLoaded() {
    const input = document.querySelector("#input");
    const btn = document.querySelector("#button");
    const output = document.querySelector("#output");
    
    btn.addEventListener("click", sendRequest);
    
    function sendRequest() {
      if (validateInput()) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `https://api.math.tools/numbers/base?number=${input.value}&from=10&to=2`);
        xhr.send();
        
        xhr.onerror = function() {
          writeOutput('При отправке запроса произошла ошибка');
        }
        
        xhr.onload = function() {
          if (xhr.status == 200) {
            let data = JSON.parse(xhr.response);
            writeOutput(`Ответ: ${data.contents.answer}`);
          }
        }
      }
    }
   
    function writeOutput(message) {
      output.innerText = message;
    }
    
    function validateInput() {
      let validated = true;
      if (input.value === '' || isNaN(+input.value)) {
        validated = false;
      }
      return validated;
    }
  }
  
  document.addEventListener("DOMContentLoaded", pageLoaded);