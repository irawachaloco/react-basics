import * as React from "react";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

class Hello extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
        <div className="nasty-btns">
            <div className="frame flex">
                <div className="dot"></div>
            </div>
        </div>
        );
    }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}