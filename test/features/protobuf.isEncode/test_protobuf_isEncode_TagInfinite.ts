import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_isEncode_TagInfinite =
    _test_protobuf_isEncode<TagInfinite>(TagInfinite)({
        isEncode: (input) => typia.protobuf.isEncode<TagInfinite>(input),
        message: typia.protobuf.message<TagInfinite>(),
    });
