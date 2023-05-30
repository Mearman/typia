import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
export const test_createValidateStringify_ObjectLiteralType = _test_validateStringify("ObjectLiteralType", ObjectLiteralType.generate, (input: ObjectLiteralType): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ObjectLiteralType> => {
    const __is = (input: any): input is ObjectLiteralType => {
        return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age)));
    };
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectLiteralType => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), "string" === typeof input.name || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name
                }), "number" === typeof input.age && Number.isFinite(input.age) || $report(_exceptionable, {
                    path: _path + ".age",
                    expected: "number",
                    value: input.age
                })].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "__object",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "__object",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const stringify = (input: ObjectLiteralType): string => {
    const $string = (typia.createValidateStringify as any).string;
    const $number = (typia.createValidateStringify as any).number;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"age":${$number(input.age)}}`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, ObjectLiteralType.SPOILERS);
