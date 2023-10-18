function deletebox(){
    document.querySelector('.overlay').classList.add('showOver');
    document.querySelector('.deletebox').classList.add('showdelete');
}
function closedelete(){
    document.querySelector('.overlay').classList.remove('showOver');
    document.querySelector('.deletebox').classList.remove('showdelete');
}


function deletePost(postId) {
    const post = document.getElementById(postId);
    if (post) {
      post.remove();
    }
  }