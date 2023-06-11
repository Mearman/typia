import typia from "../../../../src";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_clone } from "../../../internal/_test_clone";
export const test_createClone_DynamicComposite = _test_clone("DynamicComposite", DynamicComposite.generate, (input: DynamicComposite): typia.Primitive<DynamicComposite> => {
    const $join = (typia.createClone as any).join;
    const $co0 = (input: any): any => { const output = {
        id: input.id as any,
        name: input.name as any
    } as any; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/^-?\d+\.?\d*$/).test(key)) {
            output[key] = value as any;
            continue;
        }
        if (RegExp(/^(prefix_(.*))/).test(key)) {
            output[key] = value as any;
            continue;
        }
        if (RegExp(/((.*)_postfix)$/).test(key)) {
            output[key] = value as any;
            continue;
        }
        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value as any;
            continue;
        }
        if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value as any;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
