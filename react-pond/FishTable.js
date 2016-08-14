var FishTable = (props) => (
  <table>
    <tbody>
      {props.fishData.map( (fish) => 
      	<FishTableRow fish={fish}/>
      )}
    </tbody>
  </table>
);

// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.
window.FishTable = FishTable;
