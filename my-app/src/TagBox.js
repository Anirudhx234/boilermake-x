const TagBox = (props) => {

  const tagName = props.tagName;

  return ( 
    <div className="tagbox">
      <p>{tagName}</p>
      <button onClick={props.removeTag(tagName)}>X</button>
    </div> );
}
 
export default TagBox;