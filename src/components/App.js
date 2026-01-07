import { useState } from "react";

import AccordionComponent from "./AccordionComponent";
import Counter from "./Couner";
import Counterv2 from "./Counerv2";
import Flashcard from "./Flashcard";
import Navbar from "./Navbar";
import Step from "./Step";
import StepV2 from "./StepV2";
import AccordionV2 from "./AccordionV2";
import Calculator from "./Calculator";
import TextExpander from "./TextExpander";
import Profile from "./Profile";
// import Pizzas from "./Pizzas";
import HowReactWork from "./HowReactWork";
import UserReducerBankStarter from "./UserReducerBankStarter";
import LifecycleDemo from "./LifecycleDemo";

export default function App() {
  const [page, setPage] = useState("useReducer-bank-starter");

  return (
    <>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "step" && <Step />}
        {page === "stepv2" && <StepV2 />}
        {page === "counter" && <Counter />}
        {page === "counterv2" && <Counterv2 />}
        {page === "flashcard" && <Flashcard />}
        {page === "accordionComponent" && <AccordionComponent />}
        {page === "accordionv2" && <AccordionV2 />}
        {page === "calculator" && <Calculator />}
        {page === "textExpander" && <TextExpander />}
        {page === "profile" && <Profile />}
        {/* {page === "pizzas" && <Pizzas />} */}
        {page === "howReactWork" && <HowReactWork />}
        {page === "useReducer-bank-starter" && <UserReducerBankStarter />}
        {page === "LifecycleDemo-useReducer" && <LifecycleDemo />}
      </div>
    </>
  );
}
