import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MyNewH3} from "./MyNewH3"
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// PRE-JSX
// const Article = (props) =>{
//   return  (myCreateElement("h2",{},[
//             myCreateElement("h5",{}, props.tweet),
//             myCreateElement("h3",{}, props.name),
//             myCreateElement("p",{}, props.content)]
//     )
//   )
// }

const Article  = (props)=>{
  return (
  <div>
    <h5>{props.tweet}</h5>
    <h3>{props.name}</h3>
    <p>{props.content}</p>
  </div>
  )
}

const myCreateElement = (type, props={}, children) => {
    return {
            $$typeof: Symbol.for("react.element"),
            type: type,
            props: {children: children, ...props},
            ref: null
    };
}

ReactDOM.render(
  <div>
  {Article({tweet: "welcome to react", name: "this is a name", content: "this is a content today"})}
  <Article tweet="this is using jsx" name="this is name in jsx" content="this is content using jsx"/>
  <MyNewH3 title="This is the Title " websiteName="This is the website to go to " placeToGo="http://www.google.com"/>

  </div>,
  document.getElementById("root")
)

serviceWorker.unregister();
