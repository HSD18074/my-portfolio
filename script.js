<script>
document.getElementById("scrollToAbout").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Scroll smoothly down to the About section
    window.scrollBy({
        top: 600, // Adjust this value based on your layout
        behavior: "smooth"
    });
});
</script>
