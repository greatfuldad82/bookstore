import { useState } from "react";

const BookCard = ({ bookInfo, handleAddToFavs }) => {
    const [fav, setIsFav] = useState(false);
    const handleClickFav = () => {
        setIsFav(!fav);
        handleAddToFavs(bookInfo);
    };
    return (
        <div>
          <div className="book-card-container">
            <img src={bookInfo.image} alt='book-cover' />
            <p onClick={(handleClickFav) => setIsFav(!fav)}>{fav ? "😀" : "🙃"}</p>
          </div>
          <p>{bookInfo.title}</p>
          <div>
                
                <p>{bookInfo.price}</p>
                <button>Cart</button>
            </div> 
        </div>
    );
};
        
export default BookCard;
 

