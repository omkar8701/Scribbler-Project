document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');
    const postTitle = document.getElementById('postTitle');
    const postText = document.getElementById('postText');

    editButton.addEventListener('click', function () {
        postTitle.contentEditable = true;
        postText.contentEditable = true;
        postTitle.classList.add('editable');
        postText.classList.add('editable');
        editButton.style.display = 'none';
        saveButton.style.display = 'inline-block';
    });

    saveButton.addEventListener('click', function () {
        postTitle.contentEditable = false;
        postText.contentEditable = false;
        postTitle.classList.remove('editable');
        postText.classList.remove('editable');
        editButton.style.display = 'inline-block';
        saveButton.style.display = 'none';
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');

    let likes = 0;

    likeButton.addEventListener('click', function () {
        likes++;

        if (likes === 1) {
            likeCount.textContent = '1 person likes this!';
        } else {
            likeCount.textContent = likes + ' people like this!';
        }

        likeButton.textContent = 'Liked!';
        likeButton.disabled = true;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const commentInput = document.getElementById('commentInput');
    const commentButton = document.getElementById('commentButton');
    const commentSection = document.getElementById('commentSection');

    commentButton.addEventListener('click', function () {
        const commentText = commentInput.value.trim();

        if (commentText !== '') {
            // Create a new comment element
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            newComment.textContent = commentText;

            // Add the new comment at the top of the comment section
            commentSection.insertBefore(newComment, commentSection.firstChild);

            // Clear the input box after adding the comment
            commentInput.value = '';
        }
    });
});