import typia from "../../../../src";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
export const test_assertStringify_ClassMethod = _test_assertStringify("ClassMethod", ClassMethod.generate, (input) => ((input: any): string => { const assert = (input: any): ClassMethod.Animal => {
    const __is = (input: any): input is ClassMethod.Animal => {
        return "object" === typeof input && null !== input && ("string" === typeof (input as any).name && ("number" === typeof (input as any).age && Number.isFinite((input as any).age)));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ClassMethod.Animal => {
            const $guard = (typia.assertStringify as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.name || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })) && ("number" === typeof input.age && Number.isFinite(input.age) || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ClassMethod.Animal",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ClassMethod.Animal",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const stringify = (input: ClassMethod.Animal): string => {
    const $string = (typia.assertStringify as any).string;
    const $number = (typia.assertStringify as any).number;
    return `{"name":${$string((input as any).name)},"age":${$number((input as any).age)}}`;
}; return stringify(assert(input)); })(input), ClassMethod.SPOILERS);
