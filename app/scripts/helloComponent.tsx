import * as React from "react";
interface HelloComponentProps {
    name: string;
}

export class HelloComponent extends React.Component<HelloComponentProps, {}> {
    public render(): JSX.Element {
        return <div>React: Hello, {this.props.name}</div >;
    }
}