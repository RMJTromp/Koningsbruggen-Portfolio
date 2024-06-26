const $ = (selector) => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', function() {
    {
        // contact logic
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

    {
        const header = $("body > main > header");
        const headerHeight = header.offsetHeight;

        {
            // smooth scroll on click
            const smoothScrollLinks = header.querySelectorAll('nav a[href^="#"]');

            smoothScrollLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement && targetElement.matches("section")) {
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 15;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });

                        history.pushState(null, null, `#${targetId}`);
                    }
                });
            });
        }

        {
            // smooth scroll to active section on load
            const initialHash = window.location.hash.substring(1);
            if(initialHash) {
                const targetElement = document.getElementById(initialHash);
                if(targetElement && targetElement.matches("section")) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 15;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }
});
