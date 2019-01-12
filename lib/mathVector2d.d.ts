import Vector2d from './Vector2d';
declare class MathVector2d {
    constructor();
    staticVector(args: any, types: any, x: any, y: any): Vector2d;
    staticComponent(property: any, countArguments: any, args: any, argumentTypes: any, callback: any): any;
    vector({ v, args, argsCount, types, x, y }: {
        v: any;
        args: any;
        argsCount?: number | undefined;
        types?: (typeof Vector2d)[] | undefined;
        x?: null | undefined;
        y?: null | undefined;
    }): any;
    component(v: any, property: any, countArguments: any, args: any, argumentTypes: any, callback: any): any;
    checkType(argument: any, type: any, property: any): any;
    checkTypes(args: any, types: any): void;
}
declare const _default: MathVector2d;
export default _default;
