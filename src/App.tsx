import './App.css';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {useState} from "react";
import Accordion from "./components/Accordion/Accordion";



function App() {
  console.log("App rendering")
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  return (
      <div className={"App"}>
          {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
          {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
          <Rating value={ratingValue} onClick={setRatingValue}/>
          <Accordion titleValue={"Menu"}
                     collapsed={accordionCollapsed}
                     onClick={setAccordionCollapsed}
          />
      </div>
  );
}

function PageTitle(props: any) {
  console.log("AppTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
