import typia from "../../../../src";
import { SetAlias } from "../../../structures/SetAlias";
import { _test_isStringify } from "../../../internal/_test_isStringify";
export const test_createIsStringify_SetAlias = _test_isStringify("SetAlias", SetAlias.generate, (input: SetAlias): string | null => { const is = (input: any): input is SetAlias => {
    const $io0 = (input: any): boolean => input.booleans instanceof Set && (() => [...input.booleans].every((elem: any) => "boolean" === typeof elem))() && (input.numbers instanceof Set && (() => [...input.numbers].every((elem: any) => "number" === typeof elem && Number.isFinite(elem)))()) && (input.strings instanceof Set && (() => [...input.strings].every((elem: any) => "string" === typeof elem))()) && (input.arrays instanceof Set && (() => [...input.arrays].every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))))()) && (input.objects instanceof Set && (() => [...input.objects].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)))());
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: SetAlias): string => {
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $string = (typia.createIsStringify as any).string;
    const $number = (typia.createIsStringify as any).number;
    const $so0 = (input: any): any => "{\"booleans\":{},\"numbers\":{},\"strings\":{},\"arrays\":{},\"objects\":{}}";
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, SetAlias.SPOILERS);
