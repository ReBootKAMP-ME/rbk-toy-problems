var fishData = [
  {
    name: 'Goldfish',
    image: 'http://tinyurl.com/n4vgcl5',
    description: 'Everyone\'s first pet'
  },
  {
    name: 'Pufferfish',
    image: 'http://tinyurl.com/kxd7cuu',
    description: 'So puffy!'
  },
  {
    name: 'Tuna',
    image: 'http://tinyurl.com/zgs7z2s',
    description: 'Why are these things so huge? THey\'re terrifying.'
  }
];

// Render `FishTable` here
var App = () => (
  <div>
    <FishTable allFish={fishData}/> 
  </div>
);

ReactDOM.render(<App/>,document.getElementById('app'))