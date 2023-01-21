import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {

  var data = require('../src/tags.json');
  const allTags = data.tags;

  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);

  const textEditted = (newText) => {
    setText(newText);
    setTags(allTags.filter(tag => tag.includes(newText)));
  }

  return ( 
    <div className="home">
      <div className="search">
        <div className="searchbar">
          <input className="mysearchbartext" type='text' value={text} onChange={e => textEditted(e.target.value)} placeholder="Tag Search" />
        </div>
        {text.length != 0 && (<div className="tagsList">
          <Dropdown.Menu className="tagdropdown" show>
            {tags.length == 0 && (
              <Dropdown.Item eventKey="No Results Found">No Results Found</Dropdown.Item>
            )}
            {tags.map((tag) => (
              <Dropdown.Item eventKey={tag}>{tag}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </div>)}
      </div>
    </div>
   );
}
 
export default Home;