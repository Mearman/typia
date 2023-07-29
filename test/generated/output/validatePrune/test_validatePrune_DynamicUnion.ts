import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_validatePrune_DynamicUnion = _test_validatePrune(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) =>
        ((input: any): typia.IValidation<DynamicUnion> => {
            const validate = (input: any): typia.IValidation<DynamicUnion> => {
                const errors = [] as any[];
                const __is = (input: any): input is DynamicUnion => {
                    const $join = (typia.validatePrune as any).join;
                    const $io0 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/^-?\d+\.?\d*$/).test(key))
                                return "string" === typeof value;
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return "string" === typeof value;
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return "string" === typeof value;
                            if (
                                RegExp(
                                    /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                                ).test(key)
                            )
                                return (
                                    "number" === typeof value &&
                                    Number.isFinite(value)
                                );
                            return true;
                        });
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (typia.validatePrune as any).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicUnion => {
                        const $join = (typia.validatePrune as any).join;
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                false === _exceptionable ||
                                    Object.keys(input)
                                        .map((key: any) => {
                                            const value = input[key];
                                            if (undefined === value)
                                                return true;
                                            if (
                                                RegExp(/^-?\d+\.?\d*$/).test(
                                                    key,
                                                )
                                            )
                                                return (
                                                    "string" === typeof value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "string",
                                                        value: value,
                                                    })
                                                );
                                            if (
                                                RegExp(/^(prefix_(.*))/).test(
                                                    key,
                                                )
                                            )
                                                return (
                                                    "string" === typeof value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "string",
                                                        value: value,
                                                    })
                                                );
                                            if (
                                                RegExp(/((.*)_postfix)$/).test(
                                                    key,
                                                )
                                            )
                                                return (
                                                    "string" === typeof value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "string",
                                                        value: value,
                                                    })
                                                );
                                            if (
                                                RegExp(
                                                    /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                                                ).test(key)
                                            )
                                                return (
                                                    ("number" ===
                                                        typeof value &&
                                                        Number.isFinite(
                                                            value,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "number",
                                                        value: value,
                                                    })
                                                );
                                            return true;
                                        })
                                        .every((flag: boolean) => flag),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "DynamicUnion",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "DynamicUnion",
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
            const prune = (input: DynamicUnion): void => {
                const $join = (typia.validatePrune as any).join;
                const $po0 = (input: any): any => {
                    Object.entries(input).forEach(([key, value]: any) => {
                        if (undefined === value) return;
                        if (RegExp(/^-?\d+\.?\d*$/).test(key)) {
                        }
                        if (RegExp(/^(prefix_(.*))/).test(key)) {
                        }
                        if (RegExp(/((.*)_postfix)$/).test(key)) {
                        }
                        if (
                            RegExp(
                                /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                            ).test(key)
                        ) {
                        }
                    });
                    for (const key of Object.keys(input)) {
                        if (
                            RegExp(/^-?\d+\.?\d*$/).test(key) ||
                            RegExp(/^(prefix_(.*))/).test(key) ||
                            RegExp(/((.*)_postfix)$/).test(key) ||
                            RegExp(
                                /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                            ).test(key)
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
    DynamicUnion.SPOILERS,
);