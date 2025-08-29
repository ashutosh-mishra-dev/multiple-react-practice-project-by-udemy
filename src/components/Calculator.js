import { useState } from "react";

function Calculator() {
  return (
    <div style={{ textAlign: "center", marginTop: "70px" }}>
      <TipCalculate />
    </div>
  );
}

function TipCalculate() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service ?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service ?
      </SelectPercentage>

      <Output bill={bill} tip={tip} />

      <Reset onReset={handleReset} />
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill ? </label>
      <input
        type="text"
        placeholder="Bill value.."
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label htmlFor="">{children} </label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Its okay (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">abssolutily amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3 style={{ marginTop: "30px" }}>
      you pay &#8377;{bill + tip} (&#8377;{bill} + &#8377;{tip})
    </h3>
  );
}
function Reset({ onReset }) {
  return (
    <button onClick={onReset} style={{ marginTop: "20px" }}>
      Reset
    </button>
  );
}

export default Calculator;
