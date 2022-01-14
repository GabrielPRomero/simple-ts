declare module "*.css" {
  const css: { [className: string]: string };
  export default css;
}

declare module "*.svg" {
  const ReactComponent: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export default ReactComponent;
}
