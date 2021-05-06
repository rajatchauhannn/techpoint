import React, { Component } from "react";
const omit = (obj, omitKey) =>
	Object.keys(obj).reduce((result, key) => {
		if (key !== omitKey) {
			result[key] = obj[key];
		}
		return result;
	}, {});

const overlayStyles = {
	position: "absolute",
	filter: "blur(1px)",
	transition: "opacity ease-in 1000ms",
	clipPath: "inset(0)"
};

class ProgressiveImage extends Component {
	constructor(props) {
		super(props);
		this.state = { highResImageLoaded: false };
	}
	render() {
		const { overlaySrc } = this.props;
		const { highResImageLoaded } = this.state;
		let filteredProps = omit(this.props, "overlaySrc");
		return (
			<span>
				<img alt=""
					{...filteredProps}
					onLoad={() => {
						this.setState({ highResImageLoaded: true });
					}}
					ref={img => {
						this.highResImage = img;
					}}
					src={this.props.src}
				/>
				<img alt=""
					{...filteredProps}
					className={`${this.props.className} ${overlayStyles}`}
					{...highResImageLoaded && { style: { opacity: "0" } }}
					src={overlaySrc}
				/>
			</span>
		);
	}
}

export const Test = () => (
    <div className="App">
    <ProgressiveImage
      className={"cover"}
      alt={"woman"}
      overlaySrc={
        "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5"
      }
      src={
        "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }
    />
  </div>
)