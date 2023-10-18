import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createEncode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_encode(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
        encode: (input) =>
            typia.protobuf.encode<ArrayRecursiveUnionExplicitPointer>(input),
        decode: typia.protobuf.createDecode<ArrayRecursiveUnionExplicitPointer>(),
        message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
    });