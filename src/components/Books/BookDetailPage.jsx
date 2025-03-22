import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function BookDetails() {
    const { id } = useParams();
    const book = useSelector(state => state.books)
    
    
    return <div>Details for Book ID: {id}

    <div>
        <h1>Book Name:</h1>
    </div>

    </div>;
}

export default BookDetails;
