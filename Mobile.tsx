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
      category: "electronics"
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Mobile Details received from Product:</h1>
        <p>Id: {this.props.id}</p>
        <p>Category: {this.props.category}</p>

        <button onClick={this.props.updateCategory}>Update Category</button>
      </React.Fragment>
    );
  }
}

export default Mobile;
