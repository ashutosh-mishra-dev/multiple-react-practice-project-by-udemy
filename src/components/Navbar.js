import "../css/Navbar.css";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setPage("step")}>Step</li>
        <li onClick={() => setPage("stepv2")}>Step V2</li>
        <li onClick={() => setPage("counter")}>Counter</li>
        <li onClick={() => setPage("counterv2")}>Counter v2</li>
        <li onClick={() => setPage("flashcard")}>Flashcard</li>
        <li onClick={() => setPage("accordionComponent")}> Accordion</li>
        <li onClick={() => setPage("accordionv2")}>Accordion V2</li>
        <li onClick={() => setPage("calculator")}>Calculator</li>
        <li onClick={() => setPage("textExpander")}>TextExpander</li>
        <li onClick={() => setPage("pizzas")}>Pizzas</li>
        <li onClick={() => setPage("howReactWork")}>ReactWork</li>
      </ul>
    </nav>
  );
}

export default Navbar;
