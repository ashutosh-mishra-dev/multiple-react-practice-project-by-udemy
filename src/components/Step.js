import { useState } from "react";
import "../css/step.css";

const message = [
  "Learn React 🏆📖",
  "apply job 👏",
  "invest your new income 🤑💵",
];

export default function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 7) setStep((step) => step + 1);
    if (step < 7) setStep((step) => step + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
            <div className={step >= 5 ? "active" : ""}>5</div>
            <div className={step >= 6 ? "active" : ""}>6</div>
            <div className={step >= 7 ? "active" : ""}>7</div>
            {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div> */}
          </div>
          <p className="message">
            Step : {step} {message[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
              onClick={handlePrevious}>
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
              onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
