import typia from "../../../../src";
import { AtomicSimple } from "../../../structures/AtomicSimple";
import { _test_assertClone } from "../../../internal/_test_assertClone";
export const test_createAssertClone_AtomicSimple = _test_assertClone("AtomicSimple", AtomicSimple.generate, (input: any): typia.Primitive<AtomicSimple> => { const assert = (input: any): AtomicSimple => {
    const __is = (input: any): input is AtomicSimple => {
        return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && "string" === typeof input[2]);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is AtomicSimple => {
            const $guard = (typia.createAssertClone as any).guard;
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "AtomicSimple",
                value: input
            })) && ((input.length === 3 || $guard(true, {
                path: _path + "",
                expected: "[boolean, number, string]",
                value: input
            })) && ("boolean" === typeof input[0] || $guard(true, {
                path: _path + "[0]",
                expected: "boolean",
                value: input[0]
            })) && ("number" === typeof input[1] && Number.isFinite(input[1]) || $guard(true, {
                path: _path + "[1]",
                expected: "number",
                value: input[1]
            })) && ("string" === typeof input[2] || $guard(true, {
                path: _path + "[2]",
                expected: "string",
                value: input[2]
            }))) || $guard(true, {
                path: _path + "",
                expected: "AtomicSimple",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const clone = (input: AtomicSimple): typia.Primitive<AtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]) ? [
        input[0] as any,
        input[1] as any,
        input[2] as any
    ] as any : input as any;
}; assert(input); const output = clone(input); return output; }, AtomicSimple.SPOILERS);
