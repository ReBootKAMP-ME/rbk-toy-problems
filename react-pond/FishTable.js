var FishTable = (props) => (
  <table>
    <tbody>
      <FishTableRow fish={props.fishes[0]} />
      <FishTableRow fish={props.fishes[1]} />
      <FishTableRow fish={props.fishes[2]} />
    </tbody>
  </table>
);

// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.
window.FishTable = FishTable;
