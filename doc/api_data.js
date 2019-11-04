define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Gashu_Documents_Final_telecome_api_doc_main_js",
    "groupTitle": "C__Users_Gashu_Documents_Final_telecome_api_doc_main_js",
    "name": ""
  },
  {
    "type": "user",
    "url": "/users/",
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
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t _id: '5dbff75a17a0f60e402361b4',\n   name: \"User 1\"\n\t\tphone_number: \"00001\",\n \tpassword: \"$2b$10$g9585.6JHFzK/oymuH90pujQ5jdDspGPQUpwlBX4/uIk8j4eLZ42q\",\n\t\tdate_created: 2019-11-04T10:03:06.108Z,\n\t\tdate_modified: 2019-11-04T10:03:06.108Z,\n\t }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/users.js",
    "group": "C__Users_Gashu_Documents_Final_telecome_api_routes_users_js",
    "groupTitle": "C__Users_Gashu_Documents_Final_telecome_api_routes_users_js"
  }
] });
