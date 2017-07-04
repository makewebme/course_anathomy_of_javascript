(function(){
  var allBtns = document.querySelectorAll('.btn');
  var display = document.querySelector('.display');

  var leftOperand = null;
  var currentOperation = null;

  allBtns.forEach(function(el) {
    el.addEventListener('click', function() {
      // Цифры
      if (Number.isInteger(+this.innerText)) {
        if (+display.innerText === 0) {
          display.innerText = this.innerText
        } else {
          display.innerText = display.innerText + this.innerText
        }
      }

      // Удаление цифры
      if (this.innerText.toLowerCase() === 'c') {
        display.innerText = 0;
        leftOperand = null;
        currentOperation = null;
      }

      // Удаление символа справа
      if (this.innerText.charCodeAt(0) === 8592) {
        if (+display.innerText.length > 1) {
          display.innerText = display.innerText.slice(0, display.innerText.length-1)
        } else {
          display.innerText = 0
        }
      }

      // Кнопки арифметических действий
      if (this.innerText === '+' ||
          this.innerText === '-' ||
          this.innerText === '*' ||
          this.innerText === '/')
      {
        leftOperand = display.innerText;
        currentOperation = this.innerText;
        display.innerText = 0;
      }

      // Кнопка результата
      if (this.innerText === '=') {
        if (leftOperand) {
          eval('var result = function(){ return +leftOperand ' + currentOperation + ' +display.innerText }()');
          display.innerText = result;

          leftOperand = null;
          currentOperation = null;
        }
      }
    })
  })
})();
