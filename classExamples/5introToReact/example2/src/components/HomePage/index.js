
//function component can be written as a variable as well as all of the other variable forms of a function
const HomePage = (props) => {
    
    return (
        <div>
            <p>{props.firstName}</p>
        </div>
    );
}

export default HomePage;