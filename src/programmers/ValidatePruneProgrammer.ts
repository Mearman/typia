import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";

import { IProject } from "../transformers/IProject";

import { PruneProgrammer } from "./PruneProgrammer";
import { ValidateProgrammer } from "./ValidateProgrammer";

export namespace ValidatePruneProgrammer {
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter("input")],
                undefined,
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant(
                        "validate",
                        ValidateProgrammer.generate(
                            {
                                ...project,
                                options: {
                                    ...project.options,
                                    functional: false,
                                    numeric: true,
                                },
                            },
                            modulo,
                        )(type),
                    ),
                    StatementFactory.constant(
                        "prune",
                        PruneProgrammer.generate(
                            {
                                ...project,
                                options: {
                                    ...project.options,
                                    functional: false,
                                    numeric: false,
                                },
                            },
                            modulo,
                        )(type),
                    ),
                    StatementFactory.constant(
                        "output",
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("validate"),
                            undefined,
                            [ts.factory.createIdentifier("input")],
                        ),
                    ),
                    ts.factory.createIfStatement(
                        ts.factory.createIdentifier("output.success"),
                        ts.factory.createExpressionStatement(
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("prune"),
                                undefined,
                                [ts.factory.createIdentifier("input")],
                            ),
                        ),
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createIdentifier("output"),
                    ),
                ]),
            );
}