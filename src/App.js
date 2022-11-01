import './App.css';
import { useState } from "react";

function App() {
  const [state, setState] = useState("");

  // useEffect(() => {
  //   var op = [];
  //   var vals = [];
  //   var num;

  //   // if()

  // }, [state])
  const calculate = () => {
    let val = state.split('');
    setState("");
    // console.log(val);
    let res = 0;
    let num = '';
    let op = [];
    let nums = [];
    // let arr = val.split("/");
    for (let i = 0; i < val.length; i++) {
      if (val[i] !== '*' && val[i] !== '/' && val[i] !== '+' && val[i] !== '-') {
        num += val[i];
        // console.log(num);
      }
      else {
        if (op[op.length - 1] === '*') {
          op.pop();
          let temp = num * nums.pop();
          console.log(temp);
          nums.push(temp);
          op.push(val[i]);
          num = '';
        } else if (op[op.length - 1] === '/') {
          op.pop();
          let temp = nums.pop()/num;
          nums.push(temp);
          op.push(val[i]);
          num = '';
        } else {
          nums.push(parseInt(num));
          num = '';
          op.push(val[i]);
        }
      }
    }
    nums.push(parseInt(num));
    console.log(nums,op)
    while(nums.length!==1){
      let num1 = nums.pop()
      let num2 = nums.pop();
      let opr = op.pop();
      console.log(num1,opr,num2);
      if(opr==='+'){
        let temp = num1+num2;
        nums.push(temp);
      }else
      if(opr==='-'){
        let temp = num2-num1;
        nums.push(temp);
      }else
      if(opr==='/'){
        let temp = num2/num1;
        nums.push(temp);
      }
      else
      if(opr==='*'){
        let temp = num1*num2;
        nums.push(temp);
      }
    }
    setState(nums[0]);
    console.log(nums);
  }

  return (
    <div className="App">
      <h3>Calculator</h3>
      <div>
        <input type="text" value={state} />
        <button onClick={() => { setState("") }}>c</button>
      </div>
      <div>
        <button onClick={() => { setState(state + 1) }}>1</button>
        <button onClick={() => { setState(state + 2) }}>2</button>
        <button onClick={() => { setState(state + 3) }}>3</button>
        <button onClick={() => { setState(state + '/') }}>/</button>
      </div>

      <div>
        <button onClick={() => { setState(state + 4) }}>4</button>
        <button onClick={() => { setState(state + 5) }}>5</button>
        <button onClick={() => { setState(state + 6) }}>6</button>
        <button onClick={() => { setState(state + '-') }}>-</button>
      </div>

      <div>
        <button onClick={() => { setState(state + 7) }}>7</button>
        <button onClick={() => { setState(state + 8) }}>8</button>
        <button onClick={() => { setState(state + 9) }}>9</button>
        <button onClick={() => { setState(state + '+') }}>+</button>
      </div>

      <div>
        <button onClick={() => { setState(state + '.') }}>.</button>
        <button onClick={() => { setState(state + 0) }}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => { setState(state + '*') }}>*</button>
      </div>
    </div>
  );
}

export default App;
