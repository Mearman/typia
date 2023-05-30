import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";
export const test_validateEquals_FunctionalProperty = _test_validateEquals("FunctionalProperty", FunctionalProperty.generate, (input) => ((input: any): typia.IValidation<FunctionalProperty> => {
    const __is = (input: any, _exceptionable: boolean = true): input is FunctionalProperty => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.name && "function" === typeof input.closure && (2 === Object.keys(input).length || Object.keys(input).every(key => {
            if (["name", "closure"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    const $join = (typia.validateEquals as any).join;
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is FunctionalProperty => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name
                }), "function" === typeof input.closure || $report(_exceptionable, {
                    path: _path + ".closure",
                    expected: "unknown",
                    value: input.closure
                }), 2 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                    if (["name", "closure"].some(prop => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    return $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value
                    });
                }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "FunctionalProperty",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "FunctionalProperty",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
})(input));
