import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_encode_ArrayHierarchicalPointer =
    _test_protobuf_encode<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
        encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
        message: typia.protobuf.message<ArrayHierarchicalPointer>(),
    });
