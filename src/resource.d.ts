declare module '*.svg?react' {
  const content: SVGComponent;
  export default content;
}

declare type SVGComponent = (
  props: React.SVGProps<SVGElement>
) => React.ReactElement;

declare module '*.png' {
  const content: any;
  export default content;
}
