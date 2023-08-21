import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_validatePrune_DynamicConstant = _test_validatePrune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((input: any): typia.IValidation<DynamicConstant> => {
            const validate = (
                input: any,
            ): typia.IValidation<DynamicConstant> => {
                const errors = [] as any[];
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
                if (false === __is(input)) {
                    const $report = (typia.validatePrune as any).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicConstant => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.a &&
                                    Number.isFinite(input.a)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".a",
                                        expected: "number",
                                        value: input.a,
                                    }),
                                ("number" === typeof input.b &&
                                    Number.isFinite(input.b)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".b",
                                        expected: "number",
                                        value: input.b,
                                    }),
                                ("number" === typeof input.c &&
                                    Number.isFinite(input.c)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".c",
                                        expected: "number",
                                        value: input.c,
                                    }),
                                ("number" === typeof input.d &&
                                    Number.isFinite(input.d)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".d",
                                        expected: "number",
                                        value: input.d,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "DynamicConstant",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "DynamicConstant",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const prune = (input: DynamicConstant): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "a" === key ||
                            "b" === key ||
                            "c" === key ||
                            "d" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    DynamicConstant.SPOILERS,
);