import typia from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_isPrune } from "../../../internal/_test_isPrune";
export const test_createIsPrune_ObjectLiteralType = _test_isPrune("ObjectLiteralType", ObjectLiteralType.generate, (input: any): input is ObjectLiteralType => { const is = (input: any): input is ObjectLiteralType => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && "string" === typeof (input as any).name && ("number" === typeof (input as any).age && Number.isFinite((input as any).age)));
}; const prune = (input: ObjectLiteralType): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key || "age" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; }, ObjectLiteralType.SPOILERS);
