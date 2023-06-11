import typia from "../../../src";

import { SetAlias } from "../../structures/SetAlias";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_SetAlias = _test_assertClone(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.assertClone(input),
    SetAlias.SPOILERS,
);
