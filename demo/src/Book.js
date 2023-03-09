
export default function Book (props) {
 
  return props.name ? (
    <div>
      <h1>{(props.name)?<span> {props.name} </span>: 'default name'}</h1>
      <div className="box">
        <pre>{props.extra} </pre>
        <p>{props.text} </p>
      </div>
      <div className="square">
        <h2>{props.header} </h2>
        <h2> {props.children} </h2>
      </div>
    </div>
  ) : (<h1>'Malumot topilmadi'</h1>)  
}

