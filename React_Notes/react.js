{
  /*  ________________________________________________   */
}
{
  /*  Syntax   */
}

const JSX = (
  <div>
    <h1>React</h1>
    <p>About React</p>
    <ul>
      <li>Meta (Facebook)</li>
      <li>Open Source</li>
      <li>JavaScript / Html</li>
    </ul>
  </div>
);

{
  /*  ________________________________________________   */
}
{
  /*  Comments   */
}

{
  /*  ________________________________________________   */
}
{
  /*   Render HTML Elements to the DOM (Document Object Model, - Hierchy)  */
}

const JSX_1 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById("challenge-node"));
{
  /* ReactDOM.render(componentToRender, targetNode) */
}

{
  /*  ________________________________________________   */
}
{
  /*  class and methods syntax   */
}

// In react, methods use camelCase
// In react, class is a reserverd word -> className

const JSX_3 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

{
  /*  ________________________________________________   */
}
{
  /*  self closing in JSX   */
}

// in html there are special self closing tags like
// <br /> or <br/>, <link>, <img>

// In react, all JSX elements can be self closing (with a /) or closed separately
// self closing tag can't contain any content
// but, some elements like <br /> can still only be self closing

const JSX_4 = (
  <div>
    <br /> {/* should be written like this so when trasnfered to html its ok */}
    <div />
    <div></div>
  </div>
);

{
  /*  ________________________________________________   */
}
{
  /*  stateless functional component ___________________________________ */
}

// stateless = can receive data, but don't manage or track changes
// created by using a JS function, that returns either JSX or null
// function name must begging with capital Letter

const MyComponent = function () {
  return <div>Test123</div>;
};

// ________________________________________________________________________
// Create a react component
// use "class" syntax
// extends = assign react.compent's speacial features

class MyComponent_1 extends React.Component {
  constructor(props) {
    super(props); // blueprint code for intialization
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
}

// ________________________________________________________________________
// Render a component with Composition

const ChildComponent = () => {
  // stateless functional component
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  // class constructor extends
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent /> {/* Render "ChildComponent" */}
      </div>
    );
  }
}

// ________________________________________________________________________
// Rendering nestesd components

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit /> {/* Change this line */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits /> {/* Change this line */}
      </div>
    );
  }
}

// ________________________________________________________________________
// Another example

class Fruits_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus /> {/* Change this line */}
        <Citrus /> {/* Change this line */}
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits /> {/* Change this line */}
        <Vegetables /> {/* Change this line */}
      </div>
    );
  }
}
/* 
  Types of Food:
    Fruits:
      Non-Citrus:
        Apples
        Blueberries
        Strawberries
        Bananas
      Citrus:
        Lemon
        Lime
        Orange
        Grapefruit
    Vegetables:
        Brussel Sprouts
        Broccoli
        Squash
  */

// ________________________________________________________________________
// Render a class component into the DOM

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}

ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));
//               component to render, target node(where to put it)
// this renders into the html DOM

// ________________________________________________________________________
// Writing my first component solo

class MyComponent1 extends React.Component {
  // class Name assigned React.Component
  constructor(props) {
    super(props); // blueprint
  }
  render() {
    // render
    return <h1>My First React Component!</h1>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
// render into the html DOM (what, where)

// ________________________________________________________________________
// pass arguments as props

const CurrentDate = (props) => {
  // argument = props
  // stateless function
  return (
    <div>
      <p>The current date is: {props.date}</p> {/* text: {argument.X}*/}
    </div>
  );
};

class Calendar extends React.Component {
  // react class component
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3> {/* return text */}
        <CurrentDate date={Date()} />
        {/* return <p> text ... with argument.X supplied   */}
      </div>
    );
  }
}

// ________________________________________________________________________
// pass an array as props

const List = (props) => {
  // list stateless component
  return <p>{props.tasks.join(", ")}</p>; // return props.(task property -> array).join(fomratted as ->(", ")<-)
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["l'abeile", "Perry St"]} /> {/* render tasks here */}
        <h2>Tomorrow</h2>
        <List tasks={["Carbone", "Gym", "React"]} /> {/* render tasks here */}
      </div>
    );
  }
}

/* Console

To Do Lists
  Today
    Interview - l'abeile, Interview - Perry St

  Tomorrow
    Carbone, Gym, React

*/

// ________________________________________________________________________
// use default props

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};

ShoppingCart.defaultProps = { items: 0 };

// ________________________________________________________________________
// override default props

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>; // argument.quantity (property name)
};

Items.defaultProps = {
  quantity: 0, // default set at 0
};

class ShoppingCart1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />; // override, set argument at 10
  }
}

// ________________________________________________________________________
// Use PropTypes to Define the Props You Expect

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.propTypes = { quantity: PropTypes.number.isRequired }; // Component.propTypes = {argument.quanitity = PropTypes.type.isRequired}

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}

// ________________________________________________________________________
// Access class props with (this.)

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Welcome name="Alessandro" /> {/* argument = "Alessandro" */}
      </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          Hello, <strong>{this.props.name}</strong>!
          {/* display argument this(refer to class).props.name */}
        </p>
      </div>
    );
  }
}

// ________________________________________________________________________
// Review

class CampSite extends React.Component {
  // React component
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name="user846" />{" "}
        {/* return camper component, given name argument */}
      </div>
    );
  }
}

const Camper = (props) => {
  // Camper component
  return (
    <p>{props.name}</p> // return argument.name
  );
};

Camper.defaultProps = { name: "CamperBot" }; // name argument default

Camper.propTypes = { name: PropTypes.string.isRequired }; // name argument type lock

// ________________________________________________________________________
// Stateful components

/* 
React "State"
State is status of data, feed to the application

The app will respond depending on the state(status) of data

State in react is created by a "state" property to an object 
= x.state = {}

state is local to the function, you access it globally by props

*/

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "Alex" }; // compenent's status = argument
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1> {/*  render status' argument */}
      </div>
    );
  }
}

// ________________________________________________________________________
// Accessing state in the render portion

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    const name = this.state.name; // referencing state property

    return (
      <div>
        <h1>{name}</h1> {/* referencing render property */}
      </div>
    );
  }
}

// ________________________________________________________________________
// Update State with this.setState

class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    }; // first state
    this.handleClick = this.handleClick.bind(this); // binding/linking handleClick to the handleClick function the class
  }
  handleClick() {
    // class method
    this.setState({ name: "React Rocks!" }); // handle click funtion modifies state argument to ...
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>{" "}
        {/* button that onclick executes handle click function */}
        <h1>{this.state.name}</h1> {/* render name status' */}
      </div>
    );
  }
}

// ________________________________________________________________________
// binding this

class MyComponent4 extends React.Component {
  // component
  constructor(props) {
    // constructor
    super(props);
    this.state = {
      text: "Hello",
    };
    this.handleClick = this.handleClick.bind(this); // binding handleClick's method "this" to "this" in the constructor
  }
  handleClick() {
    // class method
    this.setState({
      // by default, this is unlickied to the constructor, so it is undefined
      text: "You clicked!",
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>{" "}
        {/* trigger onClick this.handleClick function  */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

// ________________________________________________________________________
// using state and props in as parameters in functions
// For efficinecy purposes, React will run and change states in batches, meaning, it won't always chronologically return corresponding states
// When running a function, if you feed a state, it will not act appropiately, becuase of the batching/skipping
// But, you can use the (state) parameter so it does retrieve each state accordingly

class MyComponent69 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false, // default value is false for porperty visibility
    };
    this.toggleVisibility = this.toggleVisibility.bind(this); // binding toggleVis.. method to the construtor and state
  }
  toggleVisibility() {
    this.setState((state) => ({
      // a method that changes the state. It takes the state (avoiding batching) as parameter, then it modifies the visibility state value to it being the opposed bolean value of state
      visibility: !state.visibility,
    }));
  }
  render() {
    if (this.state.visibility) {
      // visbility is true
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>{" "}
          {/* display clickable button that targets toggleVisbility method */}
          <h1>Now you see me!</h1> {/* appear text */}
        </div>
      );
    } else {
      // if visibility false
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>{" "}
          {/* display clickable button that targets toggleVisbility method */}
        </div>
      );
    }
  }
}

// console:
// a button that says click me
// an onclick appearing/dissapearing <p> that says "Now you see me!"

// ________________________________________________________________________
// Counter

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.reset = this.reset.bind(this); // bindings to the methods
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  reset() {
    this.setState({
      count: 0,
    });
  }
  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }
  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

// console:
// 3 buttons: increment, decrement, reset
// and 1 <p> Current count: 0

// ________________________________________________________________________
// controlled input; meaning, React can controlled the element

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "", // state parameter called input, set as a string
    };
    this.handleChange = this.handleChange.bind(this); // binding to the construtor
  }
  handleChange(event) {
    // method that takes event parameter
    this.setState({
      // change state
      input: event.target.value, // input property set to "parameter".target.value
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        {/* input field; value(or reference/link) to this.state.input property. AND, onchange activtes component's handleChange method  */}
        <h4>Controlled Input:</h4> {/* text */}
        <p>{this.state.input}</p> {/* print input property */}
      </div>
    );
  }
}

// ________________________________________________________________________
// controlled form

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "", // state property
      submit: "", // state property
    };
    this.handleChange = this.handleChange.bind(this); // bindings
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    // handleChange method that takes event as parameter
    this.setState({
      input: event.target.value, // change input state to text
    });
  }
  handleSubmit(event) {
    // handleSubmit method
    this.setState({
      submit: this.state.input, // change submit state to input property
    });
    event.preventDefault(); // reverses default action of reloading page when submitting
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* form element on submission = execute handleSubmit -> change submit property */}
          <input value={this.state.input} onChange={this.handleChange} />
          {/* input textbar linked to input, and onchange execute handlechange with set text to input property */}
          <button type="submit">Submit!</button> {/* submit the form */}
        </form>
        <h1>{this.state.submit}</h1> {/* displays submit property (input) */}
      </div>
    );
  }
}

// ________________________________________________________________________
// controlled forms

/* 

1. add the element html 
2. assign state to the element value
3. Assign eventHandler that updates the state 

*/

class PracticeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "aless-x-code", // step 2. linking property state to the element
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value, // step 3. onchange handler set the username state to what is written on the html element
    });
  }
  render() {
    return (
      <div>
        <input // step 1. Write element's html
          value={this.state.username} // step 2. link element to state
          onChange={this.handleUsernameChange} // step 3. onchange handler
        >
          aless-x-code
        </input>
        <p>Username</p>
      </div>
    );
  }
}

// ________________________________________________________________________
// controlled forms sample

class MyTestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
    };
    this.handleCommentsChange = this.handleCommentsChange.bind(this);
  }
  handleCommentsChange(event) {
    this.setState({
      comments: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.comments}
          onChange={this.handleCommentsChange}
        />
        <p>Comments</p>
      </div>
    );
  }
}

// ________________________________________________________________________
// Pass state as props to child components

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />{" "}
        {/* render Navbar component. Step 2, reference of name = state name*/}
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello, my name is: {this.props.name}</h1>{" "}
        {/* insert this.props.name */}
      </div>
    );
  }
}

// ________________________________________________________________________
// feeding callbacks
// props = feed/given from someone else
// state = internal state within component

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}

// ________________________________________________________________________
// lifecycle method componentDidMount

class MyComponent9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {
    // called after the component is posted to the DOM; so DOM posts, then it will execute. Any changes to the setState will trigger a re-rendering
    setTimeout(() => {
      // calling server data
      this.setState({
        activeUsers: 1273,
      });
    }, 1000); // 1000 = 1 second
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}

// ________________________________________________________________________
// shouldComponentUpdate ?

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    // Change code below this line
    if (nextProps.value % 2 == 0) {
      return true;
    } else {
      return false;
    }
    // Change code above this line
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

// ________________________________________________________________________
// inline styles

class Colorful extends React.Component {
  render() {
    return <div style={{ color: "red", fontSize: "72px" }}>Big Red</div>;
  }
}

// ________________________________________________________________________
// styles object

const styles = { color: "purple", fontSize: "40", border: "2px solid purple" };
class Colorful extends React.Component {
  render() {
    return <div style={styles}>Style Me!</div>;
  }
}
