import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_assertClone_DynamicConstant = _test_assertClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicConstant> => {
            const assert = (input: any): DynamicConstant => {
                const __is = (input: any): input is DynamicConstant => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "number" === typeof (input as any).a &&
                        Number.isFinite((input as any).a) &&
                        "number" === typeof (input as any).b &&
                        Number.isFinite((input as any).b) &&
                        "number" === typeof (input as any).c &&
                        Number.isFinite((input as any).c) &&
                        "number" === typeof (input as any).d &&
                        Number.isFinite((input as any).d)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicConstant => {
                        const $guard = (typia.assertClone as any).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("number" === typeof input.a &&
                                Number.isFinite(input.a)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".a",
                                    expected: "number",
                                    value: input.a,
                                })) &&
                            (("number" === typeof input.b &&
                                Number.isFinite(input.b)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".b",
                                    expected: "number",
                                    value: input.b,
                                })) &&
                            (("number" === typeof input.c &&
                                Number.isFinite(input.c)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".c",
                                    expected: "number",
                                    value: input.c,
                                })) &&
                            (("number" === typeof input.d &&
                                Number.isFinite(input.d)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".d",
                                    expected: "number",
                                    value: input.d,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "DynamicConstant",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicConstant",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: DynamicConstant,
            ): typia.Primitive<DynamicConstant> => {
                const $co0 = (input: any): any => ({
                    a: input.a as any,
                    b: input.b as any,
                    c: input.c as any,
                    d: input.d as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    DynamicConstant.SPOILERS,
);