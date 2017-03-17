import * as React from "react";
interface ComponentProps {
    name: string;
}

export class Component extends React.Component<ComponentProps, {}> {
    public render(): JSX.Element {
        return <div>React: Hello, {this.props.name}</div >;
    }
}