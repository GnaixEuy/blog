var posts=["2024/03/31/hello-world/","2024/04/02/MarkDown的基本语法使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };