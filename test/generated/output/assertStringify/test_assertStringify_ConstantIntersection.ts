import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_assertStringify_ConstantIntersection = _test_assertStringify(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) =>
        ((input: any): string => {
            const assert = (
                input: any,
            ): [
                ConstantIntersection.Wrapper<false>,
                ConstantIntersection.Wrapper<1>,
                ConstantIntersection.Wrapper<"two">,
            ] => {
                const __is = (
                    input: any,
                ): input is [
                    ConstantIntersection.Wrapper<false>,
                    ConstantIntersection.Wrapper<1>,
                    ConstantIntersection.Wrapper<"two">,
                ] => {
                    return (
                        Array.isArray(input) &&
                        input.length === 3 &&
                        false === input[0] &&
                        1 === input[1] &&
                        "two" === input[2]
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [
                        ConstantIntersection.Wrapper<false>,
                        ConstantIntersection.Wrapper<1>,
                        ConstantIntersection.Wrapper<"two">,
                    ] => {
                        const $guard = (typia.assertStringify as any).guard;
                        return (
                            ((Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ConstantIntersection",
                                    value: input,
                                })) &&
                                (input.length === 3 ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: '[false, 1, "two"]',
                                        value: input,
                                    })) &&
                                (false === input[0] ||
                                    $guard(true, {
                                        path: _path + "[0]",
                                        expected: "false",
                                        value: input[0],
                                    })) &&
                                (1 === input[1] ||
                                    $guard(true, {
                                        path: _path + "[1]",
                                        expected: "1",
                                        value: input[1],
                                    })) &&
                                ("two" === input[2] ||
                                    $guard(true, {
                                        path: _path + "[2]",
                                        expected: '"two"',
                                        value: input[2],
                                    }))) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ConstantIntersection",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (
                input: [
                    ConstantIntersection.Wrapper<false>,
                    ConstantIntersection.Wrapper<1>,
                    ConstantIntersection.Wrapper<"two">,
                ],
            ): string => {
                const $number = (typia.assertStringify as any).number;
                const $string = (typia.assertStringify as any).string;
                const $throws = (typia.assertStringify as any).throws;
                return `[${input[0]},${$number(input[1])},${(() => {
                    if ("string" === typeof input[2]) return $string(input[2]);
                    if ("string" === typeof input[2])
                        return '"' + input[2] + '"';
                    $throws({
                        expected: '"two"',
                        value: input[2],
                    });
                })()}]`;
            };
            return stringify(assert(input));
        })(input),
    ConstantIntersection.SPOILERS,
);