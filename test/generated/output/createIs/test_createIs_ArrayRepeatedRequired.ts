import typia from "../../../../src";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_is } from "../../../internal/_test_is";
export const test_createIs_ArrayRepeatedRequired = _test_is("ArrayRepeatedRequired", ArrayRepeatedRequired.generate, (input: any): input is ArrayRepeatedRequired => {
    const $ia0 = (input: any): any => input.every((elem: any) => null !== elem && undefined !== elem && ("string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || Array.isArray(elem) && ($ia0(elem) || false)));
    return null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && ($ia0(input) || false));
}, ArrayRepeatedRequired.SPOILERS);
