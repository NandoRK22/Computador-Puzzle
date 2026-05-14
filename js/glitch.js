setInterval(() => {
    document.body.classList.add("glitch");

    setTimeout(() => {
        document.body.classList.remove("glitch");
    }, 100);
}, 5000);
