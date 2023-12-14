declare module "*.svg";
declare module "*.png";
declare module "*.ico";
declare module 'qrcode';
declare module "*.xml";
declare module "*.xlsx";
declare module "*.jpg";

declare module'*.scss' {
    const content: {[key: string]: any}
    export  = content
}