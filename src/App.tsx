import './App.css';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";



function App() {
  console.log("App rendering")
  return (
      <div className={"App"}>
          <UncontrolledAccordion titleValue={"Menu"}/>
          <UncontrolledAccordion titleValue={"Users"}/>
          <UncontrolledRating/>
      </div>
  );
}

function PageTitle(props: any) {
  console.log("AppTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
