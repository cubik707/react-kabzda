import './App.css';
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";



function App() {
  console.log("App rendering")
  return (
      <div>
        <PageTitle title={"This is app component"}/>
        <PageTitle title={"My friends"}/>
        Article 1
        <Rating value={3}/>
        <Accordion title={"Menu"}/>
        <Accordion title={"Users"}/>
        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
      </div>
  );
}

function PageTitle(props: any) {
  console.log("AppTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
