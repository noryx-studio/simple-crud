export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Simple CRUD API',
    version: '1.0.0',
    description: 'A simple CRUD API for managing persons',
  },
  servers: [
    {
      url: 'http://localhost:8800',
      description: 'Development server',
    },
  ],
  paths: {
    '/api/persons': {
      get: {
        summary: 'Get all persons',
        responses: {
          '200': {
            description: 'A list of persons',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Person',
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: 'Create a new person',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/PersonInput',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Person created successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Person',
                },
              },
            },
          },
        },
      },
    },
    '/api/persons/{id}': {
      put: {
        summary: 'Update a person',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/PersonInput',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Person updated successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Person',
                },
              },
            },
          },
        },
      },
      delete: {
        summary: 'Delete a person',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          '204': { description: 'Person deleted successfully' },
        },
      },
    },
  },
  components: {
    schemas: {
      Person: {
        type: 'object',
        properties: {
          _id: { type: 'string', example: '64c9f1b8a4f1e8c1a2d3f456' },
          name: { type: 'string', example: 'John Doe' },
          address: { type: 'string', example: '123 Main St' },
          phone: { type: 'string', example: '+1234567890' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
      PersonInput: {
        type: 'object',
        properties: {
          name: { type: 'string', example: 'John Doe' },
          address: { type: 'string', example: '123 Main St' },
          phone: { type: 'string', example: '+1234567890' },
        },
        required: ['name', 'address', 'phone'],
      },
    },
  },
};
