import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArraySimple } from "../../../../structures/ArraySimple";

export const test_json_application_swagger_ArraySimple = _test_json_application(
  "swagger",
)("ArraySimple")({
  schemas: [
    {
      $ref: "#/components/schemas/ArraySimple",
    },
  ],
  components: {
    schemas: {
      ArraySimple: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ArraySimple.IPerson",
        },
      },
      "ArraySimple.IPerson": {
        type: "object",
        properties: {
          name: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          email: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          hobbies: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              $ref: "#/components/schemas/ArraySimple.IHobby",
            },
          },
        },
        nullable: false,
        required: ["name", "email", "hobbies"],
        "x-typia-jsDocTags": [],
      },
      "ArraySimple.IHobby": {
        type: "object",
        properties: {
          name: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          body: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          rank: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
        },
        nullable: false,
        required: ["name", "body", "rank"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "swagger",
});