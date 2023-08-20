import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_assertEncode_ArraySimpleProtobuf =
    _test_protobuf_assertEncode<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
        assertEncode: typia.protobuf.createAssertEncode<ArraySimpleProtobuf>(),
        message: typia.protobuf.message<ArraySimpleProtobuf>(),
    });
