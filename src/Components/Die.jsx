import './Die.css';

function Die(props) {
    return ( 
        <div className="die">
            <h2>{props.number}</h2>
        </div>
    );
}

export default Die;