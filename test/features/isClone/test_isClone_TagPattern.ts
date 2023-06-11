import typia from "../../../src";

import { TagPattern } from "../../structures/TagPattern";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_TagPattern = _test_isClone(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.isClone(input),
    TagPattern.SPOILERS,
);
