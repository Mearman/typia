import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_assert_FunctionalArrayUnion = _test_assert(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input) => typia.assert<FunctionalArrayUnion>(input),
    FunctionalArrayUnion.SPOILERS,
);