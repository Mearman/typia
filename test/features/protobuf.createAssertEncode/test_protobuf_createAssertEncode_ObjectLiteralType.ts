import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_assertEncode_ObjectLiteralType =
    _test_protobuf_assertEncode<ObjectLiteralType>(ObjectLiteralType)({
        assertEncode: typia.protobuf.createAssertEncode<ObjectLiteralType>(),
        message: typia.protobuf.message<ObjectLiteralType>(),
    });
