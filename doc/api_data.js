define({ "api": [
  {
    "type": "post",
    "url": "/calls/",
    "title": "Create Call",
    "name": "CreateCall",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"receiver\": \"5dbffb1a8ebefa001775a453\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t \"_id\": '5dc0070dae8f9700175a12e7',\n     \"caller\": \"5dbff75a17a0f60e402361b4\"\n\t\t\"receiver\": \"5dbffb1a8ebefa001775a453\"\n\t }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/calls.js",
    "group": "C__Users_Gashu_Documents_Final_telecome_api_routes_calls_js",
    "groupTitle": "C__Users_Gashu_Documents_Final_telecome_api_routes_calls_js"
  },
  {
    "type": "get",
    "url": "/calls/:id",
    "title": "Get a Call",
    "name": "GetCall",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "caller",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t\"_id\": '5dc0070dae8f9700175a12e7',\n     \"caller\": \"5dbff75a17a0f60e402361b4\"\n\t\t\"receiver\": \"5dbffb1a8ebefa001775a453\"\n\t }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/calls.js",
    "group": "C__Users_Gashu_Documents_Final_telecome_api_routes_calls_js",
    "groupTitle": "C__Users_Gashu_Documents_Final_telecome_api_routes_calls_js"
  },
  {
    "type": "post",
    "url": "/texts/",
    "title": "Create Text",
    "name": "CreateText",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t {\n\t\t\"receiver\": \"5dbffb1a8ebefa001775a453\",\n     \"message\" : \"Hello\"\n\t }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t \"_id\": '5dc0070dae8f9700175a12e7',\n     \"caller\": \"5dbff75a17a0f60e402361b4\"\n\t\t\"receiver\": \"5dbffb1a8ebefa001775a453\",\n     \"message\": \"Hello\"\n\t }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/texts.js",
    "group": "C__Users_Gashu_Documents_Final_telecome_api_routes_texts_js",
    "groupTitle": "C__Users_Gashu_Documents_Final_telecome_api_routes_texts_js"
  },
  {
    "type": "get",
    "url": "/texts/:id",
    "title": "Get a Text",
    "name": "GetText",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t\"_id\": '5dc0070dae8f9700175a12e7',\n     \"sender\": \"5dbff75a17a0f60e402361b4\"\n\t\t\"receiver\": \"5dbffb1a8ebefa001775a453\",\n     \"message\" : \"Hello\"\n\t }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/texts.js",
    "group": "C__Users_Gashu_Documents_Final_telecome_api_routes_texts_js",
    "groupTitle": "C__Users_Gashu_Documents_Final_telecome_api_routes_texts_js"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "Create User",
    "name": "CreateUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t {\n   \"name\" : \"User 1\"\n\t\t\"phone_number\": \"00001\",\n\t\t\"password\": \"1234\",\n\t }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t \"_id\": '5dbff75a17a0f60e402361b4',\n   \"name\": \"User 1\"\n\t\t\"phone_number\": \"00001\",\n \t\"password\": \"$2b$10$g9585.6JHFzK/oymuH90pujQ5jdDspGPQUpwlBX4/uIk8j4eLZ42q\",\n\t\t\"date_created\": 2019-11-04T10:03:06.108Z,\n\t\t\"date_modified\": 2019-11-04T10:03:06.108Z,\n\t }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/users.js",
    "group": "C__Users_Gashu_Documents_Final_telecome_api_routes_users_js",
    "groupTitle": "C__Users_Gashu_Documents_Final_telecome_api_routes_users_js"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Delete User",
    "name": "Delete_User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/users.js",
    "group": "C__Users_Gashu_Documents_Final_telecome_api_routes_users_js",
    "groupTitle": "C__Users_Gashu_Documents_Final_telecome_api_routes_users_js"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login",
    "name": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"phone_number\": \"00001\",\n\t\"password\": \"1234\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n   {\n     \"user\" :  {\n\t\t              \"_id\": '5dbff75a17a0f60e402361b4',\n                 \"name\": \"User 1\"\n\t\t              \"phone_number\": \"00001\",\n \t              \"password\": \"$2b$10$g9585.6JHFzK/oymuH90pujQ5jdDspGPQUpwlBX4/uIk8j4eLZ42q\",\n\t\t              \"date_created\": 2019-11-04T10:03:06.108Z,\n\t\t              \"date_modified\": 2019-11-04T10:03:06.108Z,\n\t              },\n    \"token\" : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIwMDAwMSIsImlkIjoiNWRiZmY3NWExN2EwZjYwZTQwMjM2MWI0IiwiaWF0IjoxNTcyODY0NzIzLCJleHAiOjE1NzI5NTExMjN9.bNT6hxjGxlHAvQZrjeGeCend8sm8bIubEpAop4_Emm4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/users.js",
    "group": "C__Users_Gashu_Documents_Final_telecome_api_routes_users_js",
    "groupTitle": "C__Users_Gashu_Documents_Final_telecome_api_routes_users_js"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update User",
    "name": "Update_User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"name\": \"User 1 Edited\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/users.js",
    "group": "C__Users_Gashu_Documents_Final_telecome_api_routes_users_js",
    "groupTitle": "C__Users_Gashu_Documents_Final_telecome_api_routes_users_js"
  }
] });
