npm i prisma -D

npx prisma init --datasource-provider sqlite

# url change to 
file:app.db

# add in gitignore
/prisma/app.db

model Post {
  id       String       @id @default(autoincrement())
  title    String
  content  String
}

model ImagePost {
  id       String       @id @default(autoincrement())
  title    String
  content  String
  imageUrl String
  imageKey String?
}

# crete migration file, execute migration in db, install prisma client package
# generate prisma client interact with db
npx prisma migrate dev --name init