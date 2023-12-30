import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../../structures/DynamicEnumeration";

export const test_json_application_ajv_DynamicEnumeration =
  _test_json_application("ajv")("DynamicEnumeration")({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicEnumeration",
      },
    ],
    components: {
      schemas: {
        DynamicEnumeration: {
          $id: "#/components/schemas/DynamicEnumeration",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                ar: {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "string",
                },
                "zh-Hans": {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "string",
                },
                "zh-Hant": {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "string",
                },
                en: {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "string",
                },
                fr: {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "string",
                },
                de: {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "string",
                },
                ja: {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "string",
                },
                ko: {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "string",
                },
                pt: {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "string",
                },
                ru: {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "string",
                },
              },
              "x-typia-jsDocTags": [],
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
