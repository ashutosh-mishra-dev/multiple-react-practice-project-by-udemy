import AccordionComponent from "./AccordionComponent";
import Counter from "./Couner";
import Counterv2 from "./Counerv2";
import Flashcard from "./Flashcard";
import Navbar from "./Navbar";
import Step from "./Step";

import { useState } from "react";
import StepV2 from "./StepV2";
import AccordionV2 from "./AccordionV2";
import Calculator from "./Calculator";
import TextExpander from "./TextExpander";
import Profile from "./Profile";
import Pizzas from "./Pizzas";

export default function App() {
  const [page, setPage] = useState("flashcard");

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
        {page === "pizzas" && <Pizzas />}
      </div>
    </>
  );
}
