import React from "react";
import "./style.css";

function ImageCard({ imagesJSON, handlePlayerGuess }) {
    return (
        <div className="row">
            <div className="col-12">
                {imagesJSON.map((myObj) => {
                    return (
                        <div className="card img-container col-3" 
                        data-id={myObj.id} 
                        key={myObj.id}>
                                <img 
                                onClick={(event) => handlePlayerGuess(event)} 
                                className="img-fluid" 
                                data-id={myObj.id} 
                                key={myObj.id}
                                alt={myObj.name} 
                                src={myObj.image} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ImageCard;
