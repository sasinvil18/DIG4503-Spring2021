import React from "react";

function MarketItem(props){
    let m = "Item ";
    return (
        <div>
            <p>
                {m}{props.count}
            </p>
        </div>
    );
}

export default MarketItem;