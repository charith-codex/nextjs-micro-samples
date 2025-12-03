## refer docs, it is crystal clear

https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/sqlite

## no need below things when refer docs

npm i prisma -D

npx prisma init --datasource-provider sqlite

# url change to

file:app.db

# add in gitignore

app.db

model Post {
id Int @id @default(autoincrement())
title String
content String
}

model ImagePost {
id Int @id @default(autoincrement())
title String
content String
imageUrl String
imageKey String?
}

# crete migration file, execute migration in db, install prisma client package

# generate prisma client interact with db

npx prisma migrate dev --name init
