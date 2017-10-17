import * as React from "react";

export interface Props {
    name: string;
}

class HeroName extends React.Component<Props, object> {
    render() {
        const { name } = this.props;

        return (
            <div>
                <div className="home-title">
                    <svg id='title' >
                        <linearGradient id="text-colorBkgd"  fy="0" gradientTransform="rotate(60 .5 .5)">

                            <stop offset="-20%" stopColor="#f15361">
                            </stop>
                            <stop offset="50%" stopColor="hsl(177, 77%, 68%)">
                                <animate attributeName="offset" dur="66000ms" values="0;1;0"
                                        repeatCount="indefinite" />
                            </stop>
                            <stop offset="100%" stopColor="hsl(320, 61%, 41%)"/>

                        </linearGradient>
                        <text x="0" y="100"  fill="url(#text-colorBkgd)">{this.props.name}</text>
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </div>
            </div>
        );
    }
}

export default HeroName;
