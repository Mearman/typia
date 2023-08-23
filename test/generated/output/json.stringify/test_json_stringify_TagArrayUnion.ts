import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagArrayUnion } from "../../../structures/TagArrayUnion";

export const test_json_stringify_TagArrayUnion = _test_json_stringify(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input) =>
    ((input: TagArrayUnion): string => {
        const $string = (typia.json.stringify as any).string;
        const $number = (typia.json.stringify as any).number;
        const $throws = (typia.json.stringify as any).throws;
        const $is_uuid = (typia.json.stringify as any).is_uuid;
        const $so0 = (input: any): any =>
            `{"items":${`[${input.items
                .map((elem: any) => $string(elem))
                .join(",")}]`},"minItems":${`[${input.minItems
                .map((elem: any) => $number(elem))
                .join(",")}]`},"maxItems":${`[${input.maxItems
                .map((elem: any) =>
                    (() => {
                        if ("string" === typeof elem) return $string(elem);
                        if ("number" === typeof elem) return $number(elem);
                        $throws({
                            expected: "(number | string)",
                            value: elem,
                        });
                    })(),
                )
                .join(",")}]`},"both":${`[${input.both
                .map((elem: any) => $string(elem))
                .join(",")}]`}}`;
        return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
    })(input),
);