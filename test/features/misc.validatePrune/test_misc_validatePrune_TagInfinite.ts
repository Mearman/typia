import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_misc_validatePrune_TagInfinite = _test_misc_validatePrune(
    "TagInfinite",
)<TagInfinite>(TagInfinite)((input) =>
    typia.misc.validatePrune<TagInfinite>(input),
);