import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const Article = (props) =>{

  return  (myCreateElement("h2",{},[
            myCreateElement("h5",{}, props.tweet),
            myCreateElement("h3",{}, props.name),
            myCreateElement("p",{}, props.content)]
    )
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
  Article({tweet: "my Tweet",name: "MY NAME", content: "MY CONTENT"}),
  document.getElementById("root")
)

serviceWorker.unregister();
