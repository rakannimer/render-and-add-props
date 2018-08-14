import * as React from "react";

export interface NewProps {
  [key: string]: any;
}

export type Renderable = (
  props: NewProps
) => any | React.ComponentType<NewProps> | React.StatelessComponent<NewProps>;

export const renderAndAddProps = (renderable: Renderable, props: NewProps) => {
  if (typeof renderable === "function") {
    return renderable(props);
  } else if (React.Children.count(renderable) > 0) {
    return React.Children.map(renderable, child =>
      React.cloneElement(child as React.ReactElement<any>, props)
    );
  } else if (React.isValidElement(renderable)) {
    return React.cloneElement(renderable, props);
  }
  return null;
};

export default renderAndAddProps;
