import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default function run_demo(root) {
  ReactDOM.render(<Demo side={0}/>, root);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { side: props.side };
  }

  

  render() {
    return (
      <div className="row">
        I changed the button!
      </div>
    );
  }
}




