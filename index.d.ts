import React from 'react';
export declare type Renderable = () => any | React.ComponentType | React.StatelessComponent;
export declare interface Props {
  [key:string]: any
}
export declare type renderAndAddProps = (renderable:Renderable, props: {}) => {};
