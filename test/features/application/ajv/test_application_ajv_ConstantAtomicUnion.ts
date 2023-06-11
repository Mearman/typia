import typia from "typia"
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_ConstantAtomicUnion = 
    _test_application("ajv")(
        "ConstantAtomicUnion",
        typia.application<[ConstantAtomicUnion], "ajv">(),
    );