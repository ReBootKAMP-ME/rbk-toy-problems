class FishTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

    

    this.state = {
      currentfish: fishData[0],
      Fishes : fishData ,
      selectValue : null
    };
  }
  display(fish) {
    this.setState({
      currentfish: fish
    });
  }

  render() {
    return(

     
      <tr onClick={() => this.setState({clicked: !this.state.clicked})}>
        <td className="fish-name">Nemo</td>
        <td>
          <img src="http://tinyurl.com/h8o5szh" />
        </td>

        {this.state.clicked ? <td className="fish-description">Does anyone know where my dad is?</td> : null}
      </tr>
 
    )
  }
}

// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.
window.FishTableRow = FishTableRow;
