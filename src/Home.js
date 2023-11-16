const  Home = () => {
    const name = "kuba"
    const handleClick = (name, e) =>{
        console.log("click" + name, e);
    }
    return ( 
        <div className="home">
            <div className="titles">
                <h1>JOB OFFERS</h1>
                <h2>Explore new job offers.</h2>
            </div>
            <div className="buttons">
                <button onClick={(e)=>
                    handleClick(name, e)
                } className="button1">Search offer by ID</button>
                <button className="button2">Get offers</button>
                <button className="button1">Insert new offer</button>
            </div>
        </div>
     );
}
 
export default Home;