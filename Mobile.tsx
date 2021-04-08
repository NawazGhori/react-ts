import React from "react";

interface MobileState {}
interface MobileProps {
  id: number;
  category: string;
  updateCategory: () => void;
  update:()=>void
  inputCategoryRef:any;
}

class Mobile extends React.Component<MobileProps, MobileState> {
  constructor(props: MobileProps) {
    super(props);
    this.state = {
      id: 100,
      category: "Electronics"
    };

  }
  category = React.createRef<HTMLInputElement>()
  // update = () => {
  //   // console.log("Inside update");
  //   // console.log(e.target.value);
  //   console.log(this.category.current?.value)
  // };
  render() {
    return (
      <React.Fragment>
        <h4>Mobile Details received from Product:</h4>
        <p>Id: {this.props.id}</p>
        <p>Category: {this.props.category}</p>

        <button onClick={this.props.updateCategory}>Update Category to Mobiles</button>
        <br />
        <p>Enter custom category in input box below:</p>
        <input onChange={this.props.update} ref={this.props.inputCategoryRef} />
      </React.Fragment>
    );
  }
}

export default Mobile;