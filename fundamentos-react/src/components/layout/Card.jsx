import './Card.css';

export default function Card(props) {

  const cardStyle = {
    backgroundColor: props.color || "#f00",
    borderColor: props.color || "#f00"
  }

  return (
    <div className='Card' style={ cardStyle } >
      <h1 className='Title' >{props.title}</h1>
      <div className="Content">
        {props.children}
      </div>
    </div>
  );
}