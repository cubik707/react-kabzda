import './App.css';
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";



function App() {
  console.log("App rendering")
  return (
      <div>
          <UncontrolledAccordion titleValue={"Menu"}/>
          <UncontrolledAccordion titleValue={"Users"}/>
        {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
        {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
          <UncontrolledRating/>
        {/*  <Rating value={2}/>*/}
        {/*  <Rating value={3}/>*/}
        {/*  <Rating value={4}/>*/}
        {/*  <Rating value={5}/>*/}
        {/*  <OnOff on={true}/>*/}
        {/*  <OnOff on={false}/>*/}
      </div>
  );
}

function PageTitle(props: any) {
  console.log("AppTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
