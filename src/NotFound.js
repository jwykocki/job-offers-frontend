import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const NotFound = () => {
    const history = useHistory();
    const handleGoBackButton = () => {
        history.push('/');
      }
    return ( <div>
        <h2>Sorry...</h2>
        <h3>This page doesn't exist.</h3>
        <div className="inner"><button className="goBackButton"onClick={handleGoBackButton}>Go home</button></div>
 </div> );
}
 
export default NotFound;