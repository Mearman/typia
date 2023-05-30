import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DefinitionArrayRecursiveOptional } from "../../../structures/DefinitionArrayRecursiveOptional";
export const test_is_DefinitionArrayRecursiveOptional = _test_is("DefinitionArrayRecursiveOptional", DefinitionArrayRecursiveOptional.generate, (input) => ((input: any): input is string | number | Array<DefinitionArrayRecursiveOptional> | undefined => {
    const $id0 = (input: any): any => null !== input && (undefined === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
    return null !== input && (undefined === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || $id0(input));
})(input), DefinitionArrayRecursiveOptional.SPOILERS);
