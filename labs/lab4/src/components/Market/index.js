import React from "react";
import MarketItem from "./MarketItem";

class Market extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        };
    }
    render(){
        return(
            <div>
                <button onClick = {() => {
                        const items = this.state.items;
                        this.state.items.push("Item");
                        this.setState({items: items});
                    }
                }>
                    Click to Add Item
                </button>
                <div>{
                    this.state.items.map(
                        (count, key) => {
                            this.state.items.count = count;
                            this.state.items.key = key;
                            return (<p key = {key}>
                                <MarketItem />
                            </p>);
                        }
                    )
                }</div>
            </div>
        );
    }
}

export default Market;