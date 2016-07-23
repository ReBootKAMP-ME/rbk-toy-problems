console.log("FishTableRow")
class FishTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    return (
      <tr onClick={() => this.setState({clicked: !this.state.clicked})}>
        <td className="fish-name">{props.name}</td>
        <td>
          <img src={props.image} />
        </td>
        {this.state.clicked ? <td className="fish-description">{props.description}</td> : null}
      </tr>
    )
  }
}

// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.
window.FishTableRow = FishTableRow;
