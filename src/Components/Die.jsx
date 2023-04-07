import './Die.css';

function Die({ die, onClick }) {

    let styles = { backgroundColor: die.isHeld ? '#59E391' : null};

    return ( 
        <div style={styles} className="die" onClick={() => onClick(die.id)}>
            <h2>{die.number}</h2>
        </div>
    );
}

export default Die;