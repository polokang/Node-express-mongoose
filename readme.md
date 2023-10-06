# Setup 
1. `npm init`
2. `npm i express mongoose`
3. `npm i --save-dev dotenv nodemon`
4. 修改及增加 package.json & .gitignore & .env & server.js

# 如何根据数据库中的document结构生产 model 文件的 schema
1. 拷贝文件到 
   1. 3T
   2. View Document
   3. JSON: Pure, without MongoDB types
2. https://codesandbox.io/s/mongoose-schema-generator-d5t09?file=/src/schemaBuilder.js
3. 整理文件

# 关于 _id 的问题
1. 如果数据库中的 _id 类型是 ObjectId 类型，则可以直接用 String 类型搜索
2. 