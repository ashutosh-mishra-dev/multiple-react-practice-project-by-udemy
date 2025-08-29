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

export default function App() {
  const [page, setPage] = useState("calculator");

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
      </div>
    </>
  );
}
