class GroceryListItemClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryListItem = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItemClass groceryItem={groceryItem} />
    )}
  </ul>
)

var GroceryList = () => (
    <div>
      <h1>Monday Lunch</h1>
      <GroceryListItem groceryItems={['Burger Patties', 'Burger Buns']}/>
    </div>
);


ReactDOM.render(<GroceryList />, document.getElementById('app'));

// TodoList = GroceryListItem
// App = GroceryList


// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);

//     // `state` is just an object literal
//     this.state = {
//       done: false
//     };
//   }

//   // When a list item is clicked, we will toggle the `done`
//   // boolean, and our component's `render` method will run again
//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }

//   render() {
//     // Making the style conditional on our `state` lets us
//     // update it based on user interactions.
//     var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none'
//     };

//     // You can pass inline styles using React's `style` attribute to any component
//     // snake-cased css properties become camelCased this this object
//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );
//   }
// }

// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));