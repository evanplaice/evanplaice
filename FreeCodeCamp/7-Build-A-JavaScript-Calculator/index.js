var calculator;

$().ready(() => {
  calculator = new Calculator();
  // dependency inject side-effects
  calculator.updateInput = (input) => { $('#input').html(input); };
  calculator.updateHistory = (history) => { $('#history').html(history); };
});

$('button').on('click', (input) => {
  calculator.button(input.target.innerHTML);
})

class Calculator {
  constructor() {
    this._input = '';
    this._history = '';
    this._dirty = false;
    this._final = false;
    this._maxInput = 8;
    this._maxHistory = 22;
    this.updateInput = null;
    this.updateHistory = null;
  }

  get input() {
    return this._input;
  }
  
  set input(n) {
    // edge case - dirty state
    if (this._dirty) { return; }    
    // edge case - input digital limit met (decimal doesn't count)
    let match = n.match(/[0-9]/g);
    if (match && match.length > this._maxInput){
      this.dirty();
      return;
    }

    this._input = n;
    this.updateInput(this._input);
    this.updateHistory(this._history + this._input);
  }

  get history() {
    return this._history;
  }

  set history(n) {
    // edge case - dirty state
    if (this._dirty) { return; }   
    // edge case - history digital limit met
    if((n.length + this._input.length) > this._maxHistory){
      this.dirty();
      return;
    }

    this._history = n;
    this.updateHistory(this._history)
  }

  dirty() {
    this.input = 'ERROR';
    this.history = 'Digital Limit Met';
    this._dirty = true;
  }
  
  clear(history=false) {
    if (history || this._final || this._dirty) {
      this._dirty = false;
      this.history = '';
    }
    this._final = false;
    this.input = '';
  }
  
  button(input) {
    // is input scalar or non-scalar
    if (!/[^0-9.]/.test(input)) {
      this.scalar(input);
    } else {
      this.nonScalar(input);
    }
  }
  
  scalar(n) {
    // edge case - bad state, needs clear
    if (this._dirty) { return; }
    // edge case - result visible, needs clear
    if (this._final) { return; }
    // edge case - prevent more than one decimal point
    if (n === '.' && /[.]/g.test(this.input)) { return; }
    // edge case - decimal with leading zero
    if (n === '.' && this.input === '') {
      this.input = '0.';
      return;
    }

    this.input += n;
  }

  nonScalar(input) {
    switch(true) {
      case /AC/.test(input):
        this.clear(true);
        break;
      case /CE/.test(input):
        this.clear(false);
        break;
      case /[\+\-X÷]/.test(input):
        this.operator(input);
        break;
      case /=/.test(input):
        this.calc();
        break;
    }
  }
  
  operator(o) {
    // edge case - bad state, needs clear
    if (this._dirty) { return; }
    // edge case - no input
    if (this.input === '') { return; }
    // edge case - empty decimal
    if (this.input === '0.') { return; }
    // edge case - result visible, concat to result
    if (this._final) {
      this.history = this._input + o;
      this.input = '';
      this._final = false;
      return;
    }

    this.history += this.input + o;
    this.input = '';
  }

  calc() {
    // edge case - bad state, needs clear
    if (this._dirty) { return; }
    // edge case - result visible, needs clear
    if (this._final) { return; }
    // edge case - empty decimal
    if (this.input === '0.') { return; }
    // edge case - need operand + operator + operand
    if (this.history.length === 0 || this.input.length === 0) { return; }
    // collect and tokenize the input
    let input = this.history + this.input;
    let inputs = [];
    input.replace(/([\+\-X÷]|[0-9.]+)/g, (m, p) => {
      if (/[0-9]+/.test(p)) {
        inputs.push(parseFloat(p));
      } else {
        inputs.push(p);
      }
    });
    // mathematical reduce
    let result = inputs
      .reduce((acc, curr, idx, arr) => {
        // skip non-operands
        if (/[0-9]+/.test(curr)) { return acc; }
        // reduce result => operator => operand
        if (curr === '+') { acc += arr[idx+1]; }
        if (curr === '-') { acc -= arr[idx+1]; }
        if (curr === 'X') { acc *= arr[idx+1]; }
        if (curr === '÷') { acc /= arr[idx+1]; }
        return acc;
      });
    result = this.round(result).toString();
    
    this.input = result;
    this.history = input + '=' + result;
    this._final = true;
  }
  
  round(x) {
    return Math.round(x * 100) / 100;
  }
}
