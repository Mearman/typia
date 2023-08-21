import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagLength } from "../../structures/TagLength";

export const test_assertPrune_TagLength = _test_assertPrune(
    "TagLength",
    TagLength.generate,
    (input) => typia.assertPrune<TagLength>(input),
    TagLength.SPOILERS,
);