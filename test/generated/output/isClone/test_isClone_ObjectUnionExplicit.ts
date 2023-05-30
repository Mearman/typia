import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
export const test_isClone_ObjectUnionExplicit = _test_isClone("ObjectUnionExplicit", ObjectUnionExplicit.generate, (input) => ((input: any): typia.Primitive<Array<ObjectUnionExplicit.Discriminator<'point', ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<'line', ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<'triangle', ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<'rectangle', ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<'polyline', ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<'polygon', ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<'circle', ObjectUnionExplicit.ICircle>>> | null => { const is = (input: any): input is Array<ObjectUnionExplicit.Discriminator<'point', ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<'line', ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<'triangle', ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<'rectangle', ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<'polyline', ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<'polygon', ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<'circle', ObjectUnionExplicit.ICircle>> => {
    const $io0 = (input: any): boolean => "number" === typeof input.x && Number.isFinite(input.x) && ("number" === typeof input.y && Number.isFinite(input.y)) && "point" === input.type;
    const $io1 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof input.p1.x && Number.isFinite(input.p1.x) && ("number" === typeof input.p1.y && Number.isFinite(input.p1.y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof input.p2.x && Number.isFinite(input.p2.x) && ("number" === typeof input.p2.y && Number.isFinite(input.p2.y)))) && "line" === input.type;
    const $io2 = (input: any): boolean => "number" === typeof input.x && Number.isFinite(input.x) && ("number" === typeof input.y && Number.isFinite(input.y));
    const $io3 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof input.p1.x && Number.isFinite(input.p1.x) && ("number" === typeof input.p1.y && Number.isFinite(input.p1.y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof input.p2.x && Number.isFinite(input.p2.x) && ("number" === typeof input.p2.y && Number.isFinite(input.p2.y)))) && ("object" === typeof input.p3 && null !== input.p3 && ("number" === typeof input.p3.x && Number.isFinite(input.p3.x) && ("number" === typeof input.p3.y && Number.isFinite(input.p3.y)))) && "triangle" === input.type;
    const $io4 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof input.p1.x && Number.isFinite(input.p1.x) && ("number" === typeof input.p1.y && Number.isFinite(input.p1.y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof input.p2.x && Number.isFinite(input.p2.x) && ("number" === typeof input.p2.y && Number.isFinite(input.p2.y)))) && ("object" === typeof input.p3 && null !== input.p3 && ("number" === typeof input.p3.x && Number.isFinite(input.p3.x) && ("number" === typeof input.p3.y && Number.isFinite(input.p3.y)))) && ("object" === typeof input.p4 && null !== input.p4 && ("number" === typeof input.p4.x && Number.isFinite(input.p4.x) && ("number" === typeof input.p4.y && Number.isFinite(input.p4.y)))) && "rectangle" === input.type;
    const $io5 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)) && "polyline" === input.type;
    const $io6 = (input: any): boolean => "object" === typeof input.outer && null !== input.outer && $io7(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io7(elem))) && "polygon" === input.type;
    const $io7 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem));
    const $io8 = (input: any): boolean => "object" === typeof input.centroid && null !== input.centroid && ("number" === typeof input.centroid.x && Number.isFinite(input.centroid.x) && ("number" === typeof input.centroid.y && Number.isFinite(input.centroid.y))) && ("number" === typeof input.radius && Number.isFinite(input.radius)) && "circle" === input.type;
    const $iu0 = (input: any): any => (() => {
        if ("point" === input.type)
            return $io0(input);
        if ("line" === input.type)
            return $io1(input);
        if ("triangle" === input.type)
            return $io3(input);
        if ("rectangle" === input.type)
            return $io4(input);
        if ("polyline" === input.type)
            return $io5(input);
        if ("polygon" === input.type)
            return $io6(input);
        if ("circle" === input.type)
            return $io8(input);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
}; const clone = (input: Array<ObjectUnionExplicit.Discriminator<'point', ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<'line', ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<'triangle', ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<'rectangle', ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<'polyline', ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<'polygon', ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<'circle', ObjectUnionExplicit.ICircle>>): typia.Primitive<Array<ObjectUnionExplicit.Discriminator<'point', ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<'line', ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<'triangle', ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<'rectangle', ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<'polyline', ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<'polygon', ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<'circle', ObjectUnionExplicit.ICircle>>> => {
    const $throws = (typia.isClone as any).throws;
    const $io0 = (input: any): boolean => "number" === typeof input.x && "number" === typeof input.y && "point" === input.type;
    const $io1 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2)) && "line" === input.type;
    const $io2 = (input: any): boolean => "number" === typeof input.x && "number" === typeof input.y;
    const $io3 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io2(input.p3)) && "triangle" === input.type;
    const $io4 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io2(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io2(input.p4)) && "rectangle" === input.type;
    const $io5 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)) && "polyline" === input.type;
    const $io6 = (input: any): boolean => "object" === typeof input.outer && null !== input.outer && $io7(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io7(elem))) && "polygon" === input.type;
    const $io7 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem));
    const $io8 = (input: any): boolean => "object" === typeof input.centroid && null !== input.centroid && $io2(input.centroid) && "number" === typeof input.radius && "circle" === input.type;
    const $iu0 = (input: any): any => (() => {
        if ("point" === input.type)
            return $io0(input);
        if ("line" === input.type)
            return $io1(input);
        if ("triangle" === input.type)
            return $io3(input);
        if ("rectangle" === input.type)
            return $io4(input);
        if ("polyline" === input.type)
            return $io5(input);
        if ("polygon" === input.type)
            return $io6(input);
        if ("circle" === input.type)
            return $io8(input);
        return false;
    })();
    const $co0 = (input: any): any => ({
        x: input.x as any,
        y: input.y as any,
        type: input.type as any
    });
    const $co1 = (input: any): any => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co2(input.p1) : input.p1 as any,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co2(input.p2) : input.p2 as any,
        type: input.type as any
    });
    const $co2 = (input: any): any => ({
        x: input.x as any,
        y: input.y as any
    });
    const $co3 = (input: any): any => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co2(input.p1) : input.p1 as any,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co2(input.p2) : input.p2 as any,
        p3: "object" === typeof input.p3 && null !== input.p3 ? $co2(input.p3) : input.p3 as any,
        type: input.type as any
    });
    const $co4 = (input: any): any => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co2(input.p1) : input.p1 as any,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co2(input.p2) : input.p2 as any,
        p3: "object" === typeof input.p3 && null !== input.p3 ? $co2(input.p3) : input.p3 as any,
        p4: "object" === typeof input.p4 && null !== input.p4 ? $co2(input.p4) : input.p4 as any,
        type: input.type as any
    });
    const $co5 = (input: any): any => ({
        points: Array.isArray(input.points) ? input.points.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem as any) : input.points as any,
        type: input.type as any
    });
    const $co6 = (input: any): any => ({
        outer: "object" === typeof input.outer && null !== input.outer ? $co7(input.outer) : input.outer as any,
        inner: Array.isArray(input.inner) ? input.inner.map((elem: any) => "object" === typeof elem && null !== elem ? $co7(elem) : elem as any) : input.inner as any,
        type: input.type as any
    });
    const $co7 = (input: any): any => ({
        points: Array.isArray(input.points) ? input.points.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem as any) : input.points as any
    });
    const $co8 = (input: any): any => ({
        centroid: "object" === typeof input.centroid && null !== input.centroid ? $co2(input.centroid) : input.centroid as any,
        radius: input.radius as any,
        type: input.type as any
    });
    const $cu0 = (input: any): any => (() => {
        if ("point" === input.type)
            return $co0(input);
        if ("line" === input.type)
            return $co1(input);
        if ("triangle" === input.type)
            return $co3(input);
        if ("rectangle" === input.type)
            return $co4(input);
        if ("polyline" === input.type)
            return $co5(input);
        if ("polygon" === input.type)
            return $co6(input);
        if ("circle" === input.type)
            return $co8(input);
        $throws({
            expected: "(ObjectUnionExplicit.Discriminator<\"point\", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<\"line\", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<\"triangle\", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<\"rectangle\", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<\"polyline\", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<\"polygon\", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<\"circle\", ObjectUnionExplicit.ICircle>)",
            value: input
        });
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem as any) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectUnionExplicit.SPOILERS);
