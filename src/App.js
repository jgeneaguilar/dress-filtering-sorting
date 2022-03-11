import './App.css';
import { Page } from './components/page/Page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Queenly Interview Take-Home Exercise: Sorting and Filtering Dresses
      </header>
      <p className="instructions">
        Instructions: At Queenly, we want our users to be able to find the
        perfect dress.
        <br />
        Given the list of dresses imported from "dressData.js", create buttons
        to sort and filter through the dresses.
        <br />
        Please implement the following functionality:
        <br />
        <br />
        - Filter by color, both single and multiple (show only blue/yellow/red
        dresses)
        <br />
        - Filter by size, both single and multiple sizes (show only size 0/size
        4/etc)
        <br />
        - Sort by price low to high and sort by price high to low
        <br />
        - Sliding price filter: can use any 3rd party node module
        <br />
        - BONUS POINTS: any features that you think will be fun/helpful for
        shopping!
        <br />
      </p>
      <Page />
    </div>
  );
}

export default App;
