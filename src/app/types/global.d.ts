declare module "*.scss" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module "*.svg" {

  interface SVGSymbolElement {
    url: string
  }
  const SVG: SVGSymbolElement;
  export = SVG;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";