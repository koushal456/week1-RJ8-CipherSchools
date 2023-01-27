import React ,{Component} from "react";
import "./test.css";
// const Test = () =>{
//   return(
//     <div>
//       <h1 id="testId">Hello, I am koushal</h1>
//     </div>
//   );
// };
//  class Test extends Component{
//        render(){
//         return(
//             <div>
//             {/* <style>
//                 .testId{
//                     color:"red";
//                 }
//             </style> */}
//                {/* <h1 id="testId" style="color:red">Hello, I am koushal</h1> */}
//                <h1 id="testId" 
//                style={{
//                 color:"red",
//                 backgroundColor: "yellow"}}>Hello, I am koushal</h1>
//             </div>
//         );
//        }
//  }
// export default Test;
class Test extends Component{
   state = {isLoggedIn: false};
   render(){
    return(
        <div>
            {!this.state.isLoggedIn ? (<h1>You are not logged In!</h1>
            ) : (
            <h1>Congratulations, you are logged in!</h1>)}
            <button onClick={(e)=> this.setState({isLoggedIn:true})}>
                Login!
            </button>
        </div>
    );
   }
}
export default Test;