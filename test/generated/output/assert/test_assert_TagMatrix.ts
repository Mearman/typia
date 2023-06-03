import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_assert_TagMatrix = _test_assert(
    "TagMatrix",
    TagMatrix.generate,
    (input) =>
        ((input: any): TagMatrix => {
            const __is = (input: any): input is TagMatrix => {
                const $is_uuid = (typia.assert as any).is_uuid;
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.matrix) &&
                    3 === input.matrix.length &&
                    input.matrix.every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            3 === elem.length &&
                            elem.every(
                                (elem: any) =>
                                    "string" === typeof elem && $is_uuid(elem),
                            ),
                    );
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagMatrix => {
                    const $guard = (typia.assert as any).guard;
                    const $is_uuid = (typia.assert as any).is_uuid;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((Array.isArray(input.matrix) &&
                            (3 === input.matrix.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".matrix",
                                    expected: "Array.length (@items 3)",
                                    value: input.matrix,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".matrix",
                                expected: "Array<Array<string>>",
                                value: input.matrix,
                            })) &&
                            input.matrix.every(
                                (elem: any, _index1: number) =>
                                    (((Array.isArray(elem) &&
                                        (3 === elem.length ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".matrix[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "Array.length (@items 3)",
                                                value: elem,
                                            }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".matrix[" +
                                                _index1 +
                                                "]",
                                            expected: "Array<string>",
                                            value: elem,
                                        })) &&
                                        elem.every(
                                            (elem: any, _index2: number) =>
                                                ("string" === typeof elem &&
                                                    ($is_uuid(elem) ||
                                                        $guard(_exceptionable, {
                                                            path:
                                                                _path +
                                                                ".matrix[" +
                                                                _index1 +
                                                                "][" +
                                                                _index2 +
                                                                "]",
                                                            expected:
                                                                "string (@format uuid)",
                                                            value: elem,
                                                        }))) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".matrix[" +
                                                        _index1 +
                                                        "][" +
                                                        _index2 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".matrix[" + _index1 + "]",
                                        expected: "Array<string>",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".matrix",
                            expected: "Array<Array<string>>",
                            value: input.matrix,
                        });
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagMatrix",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagMatrix",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        })(input),
    TagMatrix.SPOILERS,
);
