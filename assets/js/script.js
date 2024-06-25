const $ = (selector) => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', function() {
    {
        // create post logic
        const simplemde = new SimpleMDE({
            element: $("#body"),
            spellChecker: false
        });

        const closeDialog = () => {
            simplemde.value("");
            $("#subject").value = "";
            $("#email").value = "";

            const dialog = $("#new-post-dialog");
            dialog.close();
        }

        $("#new-post").onclick = () => $("#new-post-dialog").showModal();
        $("#cancel").onclick = closeDialog;
        $("#send").onclick = closeDialog;
    }
});
