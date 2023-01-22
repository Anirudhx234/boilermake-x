import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

const Home = () => {

  var data = require('../src/tags.json');
  const allTags = data.tags;

  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);
  const [itemSelected, setItemSelected] = useState(false);

  const textEditted = (newText) => {
    setText(newText);
    setTags(allTags.filter(tag => tag.includes(newText)));
    setItemSelected(false);
  }

  const itemClicked = (item) => {
    setText(item);
    setItemSelected(true);
    axios.post('https://localhost:5000/send', {
      tag: item
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    },
    )
      .catch(function (error) {
        console.log(error);
      });
  }
  

  return ( 
    <div className="home">
      <div className="search">
        <div className="searchbar">
          <input className="mysearchbartext" type='text' value={text} onChange={e => textEditted(e.target.value)} placeholder="Tag Search" />
        </div>
        {!itemSelected && text.length != 0 && (<div className="tagsList">
          <Dropdown.Menu className="tagdropdown" show>
            {tags.length == 0 && (
              <Dropdown.Item eventKey="No Results Found">No Results Found</Dropdown.Item>
            )}
            {tags.map((tag) => (
              <Dropdown.Item eventKey={tag} key={tag} onClick={() => itemClicked(tag)}>{tag}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </div>)}
      </div>
      
    </div>
   );
}
 
export default Home;