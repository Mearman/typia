import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_random_TypeTagArray = _test_random(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
    random: () => typia.random<TypeTagArray>((TypeTagArray as any).RANDOM),
    assert: typia.createAssert<TypeTagArray>(),
});