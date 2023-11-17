import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_assert_DynamicTag = _test_assert("DynamicTag")<DynamicTag>(
    DynamicTag,
)((input) => typia.assert<DynamicTag>(input));