import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagTuple } from "../../structures/TagTuple";

export const test_json_assertStringify_TagTuple = _test_json_assertStringify(
    "TagTuple",
)<TagTuple>(TagTuple)(typia.json.createAssertStringify<TagTuple>());