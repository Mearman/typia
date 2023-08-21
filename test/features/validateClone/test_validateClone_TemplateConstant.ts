import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_validateClone_TemplateConstant = _test_validateClone(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.validateClone<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);