<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>Hi, I'm John Doe</h1>
    <p>Web Developer | AI Enthusiast | Tech Explorer</p>
</header>

<section id="about">
    <h2>About Me</h2>
    <p>I am a passionate developer focused on building meaningful web experiences.</p>
</section>

<section id="projects">
    <h2>Projects</h2>
    <div class="project">
        <h3>AI Review Summarizer</h3>
        <p>An AI-based tool that summarizes product reviews using NLP.</p>
    </div>
    <div class="project">
        <h3>Resume Maker with AI</h3>
        <p>Generates smart resumes based on job descriptions and user data.</p>
    </div>
</section>

<section id="contact">
    <h2>Contact Me</h2>
    <form action="contact.php" method="post" onsubmit="return validateForm()">
        <input type="text" name="name" placeholder="Your Name" id="name">
        <input type="email" name="email" placeholder="Your Email" id="email">
        <textarea name="message" placeholder="Your Message" id="message"></textarea>
        <button type="submit">Send</button>
    </form>
</section>

<footer>
    <p>&copy; 2025 John Doe. All rights reserved.</p>
</footer>

<script src="script.js"></script>
</body>
</html>
