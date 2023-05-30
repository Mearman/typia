import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DefinitionJsonValue } from "../../../structures/DefinitionJsonValue";
export const test_clone_DefinitionJsonValue = _test_clone("DefinitionJsonValue", DefinitionJsonValue.generate, (input) => ((input: string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null): typia.Primitive<string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null> => {
    const $join = (typia.clone as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && value.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof value && null !== value && false === Array.isArray(value) && $io0(value));
        return true;
    });
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)));
    const $co0 = (input: any): any => { const output = {} as any; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = Array.isArray(value) ? value.map((elem: any) => elem as any) : "object" === typeof value && null !== value ? $co0(value) : value as any;
            continue;
        }
    } return output; };
    const $cd0 = (input: any): any => Array.isArray(input) ? input.map((elem: any) => elem as any) : "object" === typeof input && null !== input ? $co0(input) : input as any;
    return Array.isArray(input) ? input.map((elem: any) => elem as any) : "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
