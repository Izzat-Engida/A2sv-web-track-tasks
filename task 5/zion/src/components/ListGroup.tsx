import { useState } from "react";

// Function to generate a random hex color
function generateRandomHexColor() {
  let randomNumber = Math.floor(Math.random() * 16777215);
  let hexColor = randomNumber.toString(16).padStart(6, "0");
  return `#${hexColor.toUpperCase()}`;
}
interface ListGroupProps{
items:string[];
onSelectItem:(item:string)=>void;
}
function ListGroup(items:ListGroupProps) {

  

  // State to track background colors
  const [bgColors, setBgColors] = useState(Array(items.items.length).fill(""));
  const [select,setselect]=useState(-1);

  const handleClick = (index:number) => {
    items.onSelectItem(items.items[index])
    const newColors = [...bgColors];
    newColors[index] = generateRandomHexColor();
    setBgColors(newColors);
    if(select==index){
     setselect(-1);
    }
    else{

    
    setselect(index);}
  };

  return (
    <div>
      <ul className="list-group">
        {items.items.map((item, index) => (
            index==select?
          <li
            key={index}
            className="list-group-item"
            style={{ backgroundColor: bgColors[index],borderColor:"red" ,borderWidth:"10px"}}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>:<li
            key={index}
            className="list-group-item"
            style={{ backgroundColor: bgColors[index],borderColor:"white" }}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
