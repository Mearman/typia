import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectDescription } from "../../../../structures/ObjectDescription";

export const test_json_application_ajv_surplus_ObjectDescription =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectDescription",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectDescription",
      },
    ],
    components: {
      schemas: {
        ObjectDescription: {
          $id: "#/components/schemas/ObjectDescription",
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"uuid">',
                  kind: "format",
                  value: "uuid",
                  validate:
                    "/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test($input)",
                  exclusive: ["format", "pattern"],
                },
              ],
              title: "Primary Key",
              description: "Primary Key.",
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "info",
                  text: [
                    {
                      text: "Must be unique",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            deprecated: {
              type: "boolean",
              deprecated: true,
              title: "Deprecated property",
              description:
                "Deprecated property.\n\nIf `@deprecated` comment tag being utilized, the property will be marked\nas deprecated in the JSON scheam.",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            title: {
              type: "string",
              title: "This is the title",
              description:
                "Title tag can replace the first line of the comment.",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            descriptions: {
              type: "array",
              items: {
                type: "string",
              },
              title: "Description property",
              description:
                'Description property.\n\nIf you write first line and the first line ends with "." character,\nit would be considered as the title. By the way, description does\nnot exclusive the title, so that full content be written.',
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            newLine: {
              type: "number",
              description:
                'New line before dot character\n\nIf dot character (".") being used before the first new line, it would not\nbe considered as title in the JSON schema.',
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "deprecated", "title", "descriptions", "newLine"],
          title: "This is the title of object type",
          description:
            "An interface designed to test JSON schema's object description.",
          "x-typia-jsDocTags": [
            {
              name: "title",
              text: [
                {
                  text: "This is the title of object type",
                  kind: "text",
                },
              ],
            },
            {
              name: "author",
              text: [
                {
                  text: "Samchon",
                  kind: "text",
                },
              ],
            },
          ],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
