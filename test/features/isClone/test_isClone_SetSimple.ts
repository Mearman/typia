import typia from "../../../src";

import { SetSimple } from "../../structures/SetSimple";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_SetSimple = _test_isClone(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.isClone(input),
    SetSimple.SPOILERS,
);
