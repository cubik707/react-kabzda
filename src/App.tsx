import './App.css';
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";



function App() {
  console.log("App rendering")
  return (
      <div>
        <Accordion titleValue={"Menu"} collapsed={true}/>
        <Accordion titleValue={"Users"} collapsed={false}/>
          <Rating value={1}/>
          <Rating value={2}/>
          <Rating value={3}/>
          <Rating value={4}/>
          <Rating value={5}/>
          <OnOff on={true}/>
          <OnOff on={false}/>
      </div>
  );
}

function PageTitle(props: any) {
  console.log("AppTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
