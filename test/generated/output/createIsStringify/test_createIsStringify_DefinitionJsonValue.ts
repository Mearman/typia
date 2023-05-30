import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { DefinitionJsonValue } from "../../../structures/DefinitionJsonValue";
export const test_createIsStringify_DefinitionJsonValue = _test_isStringify("DefinitionJsonValue", DefinitionJsonValue.generate, (input: DefinitionJsonValue): string | null => { const is = (input: any): input is DefinitionJsonValue => {
    const $join = (typia.createIsStringify as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return null === value || undefined === value || "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value || (Array.isArray(value) && value.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof value && null !== value && false === Array.isArray(value) && $io0(value));
        return true;
    });
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)));
    return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)) || $id0(input));
}; const stringify = (input: DefinitionJsonValue): string => {
    const $string = (typia.createIsStringify as any).string;
    const $number = (typia.createIsStringify as any).number;
    const $throws = (typia.createIsStringify as any).throws;
    const $join = (typia.createIsStringify as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && value.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof value && null !== value && false === Array.isArray(value) && $io0(value));
        return true;
    });
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)));
    const $so0 = (input: any): any => `{${Object.entries(input).map(([key, value]: [string, any]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${undefined !== value ? null !== value ? (() => {
        if ("string" === typeof value)
            return $string(value);
        if ("number" === typeof value)
            return $number(value);
        if ("boolean" === typeof value)
            return value;
        if (Array.isArray(value))
            return `[${value.map((elem: any) => $sd0(elem)).join(",")}]`;
        if ("object" === typeof value && null !== value && false === Array.isArray(value))
            return $so0(value);
        $throws({
            expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | boolean | null | number | string | undefined)",
            value: value
        });
    })() : "null" : undefined}`; }).filter(str => "" !== str).join(",")}}`;
    const $sd0 = (input: any): any => null !== input ? (() => {
        if ("string" === typeof input)
            return $string(input);
        if ("number" === typeof input)
            return $number(input);
        if ("boolean" === typeof input)
            return input;
        if (Array.isArray(input))
            return `[${input.map((elem: any) => $sd0(elem)).join(",")}]`;
        if ("object" === typeof input && null !== input && false === Array.isArray(input))
            return $so0(input);
        $throws({
            expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | boolean | null | number | string)",
            value: input
        });
    })() : "null";
    return null !== input ? (() => {
        if ("string" === typeof input)
            return $string(input);
        if ("number" === typeof input)
            return $number(input).toString();
        if ("boolean" === typeof input)
            return input.toString();
        if (Array.isArray(input))
            return `[${input.map((elem: any) => $sd0(elem)).join(",")}]`;
        if ("object" === typeof input && null !== input && false === Array.isArray(input))
            return $so0(input);
        if (true)
            return $sd0(input);
        $throws({
            expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonValue | boolean | null | number | string)",
            value: input
        });
    })() : "null";
}; return is(input) ? stringify(input) : null; }, DefinitionJsonValue.SPOILERS);
