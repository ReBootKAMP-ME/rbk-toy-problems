## Facebook SQL design

* [ ] Create relationship between below tables in http://ondras.zarovi.cz/sql/demo/ and upload screenshot in the current folder.

**Tables:** User, Like, Post, Comment

Facebook User has many Likes and many Post
Post has many Likes, many Comments and one User
<<<<<<< HEAD
Comment has a User
Likes has one User and one Post
=======
Comment has one User
Like has one User and one Post
>>>>>>> b9adad74e137ce5a399ae533bdc2e19c70b54d4a

* [ ] Optional question for your brain: User to User has Friendship.

relations 

user==>many likes ==>one to many 
user==> many post ==> one to many

post==>many likes => one to many 
post==> many comments==>one to many 
post==>one user==>one to one 

comment==>user==>one to one 

likes==>one user==>one to one
likes==>one post==>many to one 