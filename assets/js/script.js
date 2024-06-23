const $ = (selector) => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', function() {
    {
        // create post logic
        const simplemde = new SimpleMDE({
            element: $("#post-content"),
            spellChecker: false
        });

        const closeDialog = () => {
            simplemde.value("");
            $("#post-title").value = "";

            const dialog = $("#new-post-dialog");
            dialog.close();
        }

        $("#new-post").onclick = () => $("#new-post-dialog").showModal();
        $("#cancel-post").onclick = closeDialog;
        $("#save-post").onclick = () => {
            const title = $("#post-title").value;
            const content = simplemde.value();

            closeDialog();
        };
    }

    for (let i = 0; i < 25; i++) {
        const card = $("#blog-card").content.cloneNode(true);
        $("#blog-posts").appendChild(card);
    }
});
