import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { FunctionalValue } from "../../../structures/FunctionalValue";
export const test_is_FunctionalValue = _test_is("FunctionalValue", FunctionalValue.generate, (input) => ((input: any): input is (...args: Array<any>) =>  => {
    return "function" === typeof input;
})(input));
