var FishTable = (props) => (
  <table>
    <tbody>
      {props.fishs.map(fish => {
       return(  <FishTableRow fish = {fish} /> )
     }
    )} 
    </tbody>
  </table>
);

//make it general to display data from "fishData"



// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.
window.FishTable = FishTable;
