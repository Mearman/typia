import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_isDecode_ObjectUnionExplicitPointer =
    _test_protobuf_isDecode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        isDecode: typia.protobuf.createIsDecode<ObjectUnionExplicitPointer>(),
        encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
    });