import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ArrayUnion } from "../../../structures/ArrayUnion";
export const test_validateClone_ArrayUnion = _test_validateClone("ArrayUnion", ArrayUnion.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<Array<ArrayUnion.IUnion>>> => { const validate = (input: any): typia.IValidation<Array<ArrayUnion.IUnion>> => {
    const __is = (input: any): input is Array<ArrayUnion.IUnion> => {
        const $id0 = (input: any): any => Array.isArray(input) && (() => {
            if (0 === input.length)
                return true;
            const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any) => "string" === typeof elem)], [(top: any) => "boolean" === typeof top, (top: any) => top.every((elem: any) => "boolean" === typeof elem)], [(top: any) => "number" === typeof top && Number.isFinite(top), (top: any) => top.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))]];
            const front = input[0];
            const filtered = tupleList.filter(tuple => true === tuple[0](front));
            if (1 === filtered.length)
                return filtered[0][1](input);
            const array = input;
            if (1 < filtered.length)
                for (const tuple of filtered)
                    if (array.every((value: any) => true === tuple[0](value)))
                        return tuple[1](array);
            return false;
        })();
        return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && (() => {
            if (0 === elem.length)
                return true;
            const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any) => "string" === typeof elem)], [(top: any) => "boolean" === typeof top, (top: any) => top.every((elem: any) => "boolean" === typeof elem)], [(top: any) => "number" === typeof top && Number.isFinite(top), (top: any) => top.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))]];
            const front = elem[0];
            const filtered = tupleList.filter(tuple => true === tuple[0](front));
            if (1 === filtered.length)
                return filtered[0][1](elem);
            const array = elem;
            if (1 < filtered.length)
                for (const tuple of filtered)
                    if (array.every((value: any) => true === tuple[0](value)))
                        return tuple[1](array);
            return false;
        })() || $id0(elem));
    };
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<ArrayUnion.IUnion> => {
            const $vd0 = (input: any, _path: string, _exceptionable: boolean = true): any => (Array.isArray(input) || $report(_exceptionable, {
                path: _path,
                expected: "(Array<boolean> | Array<number> | Array<string>)",
                value: input
            })) && (() => {
                if (0 === input.length)
                    return true;
                const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.map((elem: any, _index3: number) => "string" === typeof elem || $report(_exceptionable, {
                            path: _path + "[" + _index3 + "]",
                            expected: "string",
                            value: elem
                        })).every((flag: boolean) => flag)], [(top: any) => "boolean" === typeof top, (top: any) => top.map((elem: any, _index3: number) => "boolean" === typeof elem || $report(_exceptionable, {
                            path: _path + "[" + _index3 + "]",
                            expected: "boolean",
                            value: elem
                        })).every((flag: boolean) => flag)], [(top: any) => "number" === typeof top && Number.isFinite(top), (top: any) => top.map((elem: any, _index3: number) => "number" === typeof elem && Number.isFinite(elem) || $report(_exceptionable, {
                            path: _path + "[" + _index3 + "]",
                            expected: "number",
                            value: elem
                        })).every((flag: boolean) => flag)]];
                const front = input[0];
                const filtered = tupleList.filter(tuple => true === tuple[0](front));
                if (1 === filtered.length)
                    return filtered[0][1](input);
                const array = input;
                if (1 < filtered.length)
                    for (const tuple of filtered)
                        if (array.every((value: any) => true === tuple[0](value)))
                            return tuple[1](array);
                return $report(_exceptionable, {
                    path: _path,
                    expected: "(Array<string> | Array<boolean> | Array<number>)",
                    value: input
                });
            })() || $report(_exceptionable, {
                path: _path,
                expected: "(Array<boolean> | Array<number> | Array<string>)",
                value: input
            });
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "Array<ArrayUnion.IUnion>",
                value: input
            })) && input.map((elem: any, _index1: number) => (Array.isArray(elem) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<boolean> | Array<number> | Array<string> | ArrayUnion.IUnion)",
                value: elem
            })) && (() => {
                if (0 === elem.length)
                    return true;
                const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.map((elem: any, _index2: number) => "string" === typeof elem || $report(true, {
                            path: _path + "[" + _index1 + "][" + _index2 + "]",
                            expected: "string",
                            value: elem
                        })).every((flag: boolean) => flag)], [(top: any) => "boolean" === typeof top, (top: any) => top.map((elem: any, _index2: number) => "boolean" === typeof elem || $report(true, {
                            path: _path + "[" + _index1 + "][" + _index2 + "]",
                            expected: "boolean",
                            value: elem
                        })).every((flag: boolean) => flag)], [(top: any) => "number" === typeof top && Number.isFinite(top), (top: any) => top.map((elem: any, _index2: number) => "number" === typeof elem && Number.isFinite(elem) || $report(true, {
                            path: _path + "[" + _index1 + "][" + _index2 + "]",
                            expected: "number",
                            value: elem
                        })).every((flag: boolean) => flag)]];
                const front = elem[0];
                const filtered = tupleList.filter(tuple => true === tuple[0](front));
                if (1 === filtered.length)
                    return filtered[0][1](elem);
                const array = elem;
                if (1 < filtered.length)
                    for (const tuple of filtered)
                        if (array.every((value: any) => true === tuple[0](value)))
                            return tuple[1](array);
                return $report(_exceptionable, {
                    path: _path + "[" + _index1 + "]",
                    expected: "(Array<string> | Array<boolean> | Array<number>)",
                    value: elem
                });
            })() || $vd0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<boolean> | Array<number> | Array<string> | ArrayUnion.IUnion)",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "Array<ArrayUnion.IUnion>",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: Array<ArrayUnion.IUnion>): typia.Primitive<Array<ArrayUnion.IUnion>> => {
    const $throws = (typia.validateClone as any).throws;
    const $id0 = (input: any): any => Array.isArray(input) && (() => {
        if (0 === input.length)
            return true;
        const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any) => "string" === typeof elem)], [(top: any) => "boolean" === typeof top, (top: any) => top.every((elem: any) => "boolean" === typeof elem)], [(top: any) => "number" === typeof top, (top: any) => top.every((elem: any) => "number" === typeof elem)]];
        const front = input[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](input);
        const array = input;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        return false;
    })();
    const $cd0 = (input: any): any => Array.isArray(input) ? (() => {
        if (0 === input.length)
            return;
        const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.map((elem: any) => elem as any)], [(top: any) => "boolean" === typeof top, (top: any) => top.map((elem: any) => elem as any)], [(top: any) => "number" === typeof top, (top: any) => top.map((elem: any) => elem as any)]];
        const front = input[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](input);
        const array = input;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        $throws({
            expected: "(Array<string> | Array<boolean> | Array<number>)",
            value: input
        });
    })() : input as any;
    return Array.isArray(input) ? input.map((elem: any) => Array.isArray(elem) ? (() => {
        if (0 === elem.length)
            return;
        const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.map((elem: any) => elem as any)], [(top: any) => "boolean" === typeof top, (top: any) => top.map((elem: any) => elem as any)], [(top: any) => "number" === typeof top, (top: any) => top.map((elem: any) => elem as any)]];
        const front = elem[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](elem);
        const array = elem;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        $throws({
            expected: "(Array<string> | Array<boolean> | Array<number>)",
            value: elem
        });
    })() : elem as any) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ArrayUnion.SPOILERS);
