import React from "react";
import MarketItem from "../MarketItem";

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
               <h2>Click the button to add a Market Item.</h2>
               <button onClick = {() => {
                    const items = this.state.items;
                    this.state.items.push(<MarketItem />);
                    this.setState({items: items});
                   }
                }>
                   Add Item
               </button>
               <div>{
                    this.state.items.map(
                        function(count, key){
                            return <p key = {key}><MarketItem count = {key}/></p>
                        }
                    )
                }</div>
           </div>
        );
    }
}

export default Market;