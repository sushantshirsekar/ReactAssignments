
import './Card.css';
function Card(props){
    const classes = 'card ' + props.className;
    return (
        <div className={classes} id='parentNode'>
            {props.children}
        </div>
    );
}

export default Card;