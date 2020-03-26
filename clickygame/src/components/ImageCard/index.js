import React from "react";
import "./style.css";

function ImageCard({ imagesJSON, handlePlayerGuess, handleIncrement }) {
    return (
        <div className="row justify-content-center">
                {imagesJSON.map((myObj) => {
                    return (
                        <div className="card img-container justify-content-center col-2" 
                        data-id={myObj.id} 
                        key={myObj.id}>
                                <img 
                                onClick={(event) => handlePlayerGuess(event) && handleIncrement(event)}
                                className="card-img" 
                                data-id={myObj.id} 
                                key={myObj.id}
                                alt={myObj.name} 
                                src={myObj.image} />
                        </div>
                    )
                })}
        </div>
    );
}

export default ImageCard;
