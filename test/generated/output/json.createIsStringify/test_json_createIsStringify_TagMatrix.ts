import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_json_isStringify_TagMatrix = _test_json_isStringify(
    "TagMatrix",
)<TagMatrix>(TagMatrix)((input: TagMatrix): string | null => {
    const is = (input: any): input is TagMatrix => {
        const $is_uuid = (typia.json.createIsStringify as any).is_uuid;
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
        return "object" === typeof input && null !== input && $io0(input);
    };
    const stringify = (input: TagMatrix): string => {
        const $string = (typia.json.createIsStringify as any).string;
        const $is_uuid = (typia.json.createIsStringify as any).is_uuid;
        const $so0 = (input: any): any =>
            `{"matrix":${`[${input.matrix
                .map(
                    (elem: any) =>
                        `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
                )
                .join(",")}]`}}`;
        return $so0(input);
    };
    return is(input) ? stringify(input) : null;
});