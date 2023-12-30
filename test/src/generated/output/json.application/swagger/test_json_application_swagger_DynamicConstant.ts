import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicConstant } from "../../../../structures/DynamicConstant";

export const test_json_application_swagger_DynamicConstant =
  _test_json_application("swagger")("DynamicConstant")({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicConstant",
      },
    ],
    components: {
      schemas: {
        DynamicConstant: {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                a: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "number",
                },
                b: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "number",
                },
                c: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "number",
                },
                d: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "number",
                },
              },
              nullable: false,
              required: ["a", "b", "c", "d"],
              "x-typia-jsDocTags": [],
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
