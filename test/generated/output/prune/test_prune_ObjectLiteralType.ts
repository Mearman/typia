import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
export const test_prune_ObjectLiteralType = _test_prune("ObjectLiteralType", ObjectLiteralType.generate, (input) => ((input: {    id: string;    name: string;    age: number;}): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key || "age" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
})(input));
