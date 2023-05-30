import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";
export const test_validate_FunctionalPropertyUnion = _test_validate("FunctionalPropertyUnion", FunctionalPropertyUnion.generate, (input) => ((input: any): typia.IValidation<Array<FunctionalPropertyUnion.IUnion>> => {
    const __is = (input: any): input is Array<FunctionalPropertyUnion.IUnion> => {
        const $io0 = (input: any): boolean => "string" === typeof input.name && (null === input.closure || undefined === input.closure || "function" === typeof input.closure || "string" === typeof input.closure || "number" === typeof input.closure && Number.isFinite(input.closure));
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<FunctionalPropertyUnion.IUnion> => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name
                }), null === input.closure || undefined === input.closure || "function" === typeof input.closure || "string" === typeof input.closure || "number" === typeof input.closure && Number.isFinite(input.closure) || $report(_exceptionable, {
                    path: _path + ".closure",
                    expected: "(null | number | string | undefined)",
                    value: input.closure
                })].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "Array<FunctionalPropertyUnion.IUnion>",
                value: input
            })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "FunctionalPropertyUnion.IUnion",
                value: elem
            })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "FunctionalPropertyUnion.IUnion",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "Array<FunctionalPropertyUnion.IUnion>",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
})(input), FunctionalPropertyUnion.SPOILERS);
