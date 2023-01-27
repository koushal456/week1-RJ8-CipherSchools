// import React from "react";
// const UserDetails = ({user = {}}) => {
//     // let {user} = props;
//     return (
//         <div>
//             <h3>{user.name}</h3>
//             <h5>
//                 Email: {user.email}
//                 <br/>
//                 Phone number: {user.phoneNumber}
//             </h5>
//         </div>
//     );
// };
import React, {Component} from "react";
class UserDetails extends Component {
    user= this.props.user;
    render() {
        return (
            <div>
                <h3>{this.user.name}</h3>
             <h5>
                 Email: {this.user.email}
                 <br/>
                 Phone number: {this.user.phoneNumber}
           </h5>
            </div>
        )
    }

}
export default UserDetails;