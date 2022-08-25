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
// 


// test test