// import React from 'react';

// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status,
//   };

//   activateEditMode = () => {
//     this.setState({
//       editMode: true,
//     });
//     //this.forceUpdate()
//   };

//   deactivateEditMode = () => {
//     this.props.updateStatusThunk(this.state.status);
//     this.setState({
//       editMode: false,
//     });
//   };

//   onStatusChange = (e) => {
//     this.setState({
//       status: e.currentTarget.value,
//     });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.status !== this.props.status) {
//       this.setState({
//         status: this.props.status,
//       });
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.editMode ? (
//           <div>
//             <input
//               autoFocus={true}
//               onChange={this.onStatusChange}
//               onBlur={this.deactivateEditMode}
//               value={this.state.status}
//             />
//           </div>
//         ) : (
//           <div>
//             <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default ProfileStatus;
