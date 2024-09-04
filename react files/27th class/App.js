import React,{Component} from "react";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={hello:"Mouritech"}
    this.changestate =
    this.changeState.bind(this)
  }
  render(){
    return(
      <div>
        <h1>REACTJS component's Lifecycle</h1>
        <h3>Hello{this.state.hello}</h3>
        <button onClick = {this.changestate}>Click Here!</button>
      </div>
    );
  }
  componentWillMount(){
    console.log('component Will Mount!')
  }
  componetDidMount(){
    console.log('component Did Mount!')
  }
  changeState(){
    this.setState({hello:"ALL!!-React Life Cycle"});
 
  }
  componentWillReceiveProps(newProps){
    console.log('Component Will Recieve Props!')
  }
  shouldComponentUpdate(newProps,newState){
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log('component will UPDATE!')
  }
  componentDidUpdate(preProps,prevState){
    console.log('Component Did UPDATE')
  }
  componentWillUnmount(){
    console.log('Component will UNMOUNT!')
  }
}
export default App;