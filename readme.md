# Setup 
1. `npm init`
2. `npm i express mongoose dotenv`
3. `npm install -D concurrently nodemon` 安装 nodemon
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


# 添加 ts 支持
1. `npm install typescript --save-dev`
2. `npm i -D typescript ts-node @types/express @types/node @types/cors`
3. 

# Features
1. 复制远端mongodb数据库的数据到本地
   1. 复制 AuditLogs
   2. 复制 ControllerReadings
   3. ControllerSettings
   4. ControllerStatus
   6. DatalogData30Min
   7. DatalogDataOneMin 主要是用作下载数据
   9. SettingsData 
   10. SystemEventLog
   11. EmailLog 【Aquareport 不记录】
   12. SmsLog 【Aquareport 不记录】
   13. ControllerSyncData 没用
   14. ControllerReadings30min 没用