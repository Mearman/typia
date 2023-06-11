import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_ObjectUnionNonPredictable = _test_validateClone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.validateClone(input),
    ObjectUnionNonPredictable.SPOILERS,
);
