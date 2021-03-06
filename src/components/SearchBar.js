import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const onInputChange = (event) => setTerm(event.target.value);

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="search-video">Video Search:</label>
          <input
            type="text"
            id="search-video"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

// import React, { Component } from "react";

// class SearchBar extends Component {
//   state = { term: "" };

//   onInputChange = (event) => {
//     this.setState({
//       term: event.target.value,
//     });
//   };

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field">
//             <label htmlFor="search-video">Video Search:</label>
//             <input
//               type="text"
//               id="search-video"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;
