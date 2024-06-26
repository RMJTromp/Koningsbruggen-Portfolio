const $ = (selector) => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', function() {
    {
        const closeDialog = () => {
            $("#subject").value = "";
            $("#email").value = "";
            $("#body").value = "";

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
            const smoothScrollLinks = header.querySelectorAll('a[href^="#"]');

            smoothScrollLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    if(window.innerWidth <= 850) return;
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement && targetElement.matches("section")) {
                        event.preventDefault();
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
