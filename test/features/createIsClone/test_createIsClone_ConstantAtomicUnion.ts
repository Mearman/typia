import typia from "typia";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ConstantAtomicUnion = _test_isClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createIsClone<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);