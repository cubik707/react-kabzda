import './App.css';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {useState} from "react";
import {Accordion} from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";



function App() {
  console.log("App rendering")
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(false)

  return (
      <div className={"App"}>
          {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
          {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
          <Rating value={ratingValue} onClick={setRatingValue}/>
          <Accordion titleValue={"Menu"}
                     collapsed={accordionCollapsed}
                     onChange={setAccordionCollapsed}
          />
          <UncontrolledOnOff on={true} onChange={setSwitchOn}/> {switchOn.toString()}
          <OnOff on={switchOn} onClick={setSwitchOn}/>
      </div>
  );
}

function PageTitle(props: any) {
  console.log("AppTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
