class App {
  constructor(props) {
    this.props = props;
  }
}

let app = {
  props: null,
};

function createApps(props) {
  let newApp = Object.create(app);
  newApp.props = props;
}

function App(props) {
  this.props = props;
  this.someMethod = function () {
    console.log(this.props.something);
  };
}

let newApp = new App({ something: true });
