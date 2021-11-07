import Square from "../../Square/Square";

const Board = ({squares}) => {

    const createScuares = values => (
        values.map( value => (
            <Square 
                value={squares[value]}
                key={`square_${value}`}/>
        ))
    );
    return (
        
        <div className="board">
            <div className="row">
                {createScuares([0,1,2])}
            </div>
            <div className="row">
                {createScuares([3,4,5])}
            </div>
            <div className="row">
                {createScuares([6,7,8])}
            </div> 
        </div>
    );
}

export default Board;