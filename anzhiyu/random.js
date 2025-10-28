var posts=["2025/07/08/2025-07-08-go-testing-mock/","2025/10/28/2025-10-28-k8s-pod/","2025/07/16/2025-07-16-redis/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };