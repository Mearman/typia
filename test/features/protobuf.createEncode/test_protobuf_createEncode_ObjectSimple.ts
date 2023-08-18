import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_encode_ObjectSimple =
    _test_protobuf_encode<ObjectSimple>(ObjectSimple)({
        encode: typia.protobuf.createEncode<ObjectSimple>(),
        message: typia.protobuf.message<ObjectSimple>(),
    });
