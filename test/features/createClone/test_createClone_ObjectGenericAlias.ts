import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectGenericAlias = _test_clone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createClone<ObjectGenericAlias>(),
);