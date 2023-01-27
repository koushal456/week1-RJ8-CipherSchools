AllUserList.js
import React, {useState} from "react";
import UserDetails from "./UserDetails";
import Tests from "./Tests";
// class AllUserList extends React.Component {
//   state = {
//     allUsers: [
//       {
//         name: "John",
//         email: "john@email.com",
//         phoneNumber: "+91-973654575",
//       },
//       {
//         name: "Shreyus",
//         email: "shreyus@gmail.com",
//         phoneNumber: "+91-658973421",
//       },
//       {
//         name: "Shreys",
//         email: "shreya@gmail.com",
//         phoneNumber: "+91-846573421",
//       },
//     ],
//   };
//   //   let array = allUsers.map((user,index)=>{
//   //     <UserDetails key = {index} user={user}/>
//   //   });
//   //let array = [<UserDetails user={allUsers[0]}/>,
//   //   <UserDetails user={allUsers[1]}/>,
//   //   <UserDetails user={allUsers[2]}/>];
//   render() {
//     return (
//       <div>
//         {this.allUsers.map((user, index) => (
//           <UserDetails key={index} user={user} />
//         ))}
//       </div>
//     );
//   }
// }

// const AllUserList = () => {
//   const [state, setState]=useState({name : "Shruti soni"}); //xyz is an array which contains 2 things, xyz[0] is state and xyz[1] is setter 
//   return <h1>The name is {state.name}</h1>
// };
const AllUserList = ()=> {
  const [state, setState] = useState ({
    name: "koushal sharma",
  })
  let  allUsers=  [
          {
            name: "John",
            email: "john@email.com",
            phoneNumber: "+91-973654575",
          },
          {
            name: "Shreyus",
            email: "shreyus@gmail.com",
            phoneNumber: "+91-658973421",
          },
          {
            name: "Shreys",
            email: "shreya@gmail.com",
            phoneNumber: "+91-846573421",
          },
        ];
        let setStateName = (name) => {
          setState({...state, name});
        };

return (
  <div>
    {/* <h1>The name is (this.state.name)</h1> */}
    <Tests name={state.name} setName={setStateName}/>
    {allUsers.map((user, index) => {
      <UserDetails key={index} user={user}/>
    })}
  </div>
)
}
export default AllUserList;