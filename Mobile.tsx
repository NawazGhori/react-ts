import React from "react";

interface MobileState {}
interface MobileProps {
  id: number;
  category: string;
  updateCategory: () => void;
}

class Mobile extends React.Component<MobileProps, MobileState> {
  constructor(props: MobileProps) {
    super(props);
    this.state = {
      id: 100,
      category: "Electronics"
    };
  }

  update = e => {
    console.log("Inside update");
    console.log(e);
  };
  render() {
    return (
      <React.Fragment>
        <h4>Mobile Details received from Product:</h4>
        <p>Id: {this.props.id}</p>
        <p>Category: {this.props.category}</p>

        <button onClick={this.props.updateCategory}>Update Category</button>
        <br />
        <input onChange={this.update} />
      </React.Fragment>
    );
  }
}

export default Mobile;
