// reusable typewriter function
function typeWriter(elementId, lines, charSpeed = 15, lineSpeed = 50, onDone = null) {
  const container = document.getElementById(elementId);
    // skip if element doesn't exist on curr page
    if (!container) return; 
  let lineIndex = 0;
  let charIndex = 0;

  function type() {
    if (lineIndex >= lines.length) {
      if (onDone) onDone();
      return;
    }

    const line = lines[lineIndex];

    if (charIndex < line.length) {
      container.innerHTML += line[charIndex];
      charIndex++;
      setTimeout(type, charSpeed);
    } else {
      container.innerHTML += "<br>";
      lineIndex++;
      charIndex = 0;
      setTimeout(type, lineSpeed);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", function () {
  // boot screen text load
  typeWriter("boot-text", [
    "$ BOOTING UP TERMINAL...",
    "",
    "$ INITIALIZING SYSTEM...",
    "",
    "$ LOADING KERNEL MODULES... [OK]",
    "",
    "$ ESTABLISHING SECURE CONNECTION... [OK]",
    "",
    "...WELCOME!",
  ]);

  // read me text load
  typeWriter("readme-text", [
    "$ WELCOME TO YONY-OS v1.0!",
    "",
    "AUTHORIZED USERS ONLY.",
    "-----------------------",
    "Hey, my name is Yony.",
    "",
    "I am a computer science student who enjoys building fun projects, exploring Linux, and learning web development!",
    "",
    "This site is my official playground to learn indie web development, showcase my projects, and document my journey.",
    "",
    "- Enjoy! ;)",
  ]);

  // whoami text load
  typeWriter("whoami-text", [
    "> USER : YONATAN WOUBE",
    "",
    "> LOCATION : Virginia, USA",
    "-----------------------",
    "> EDUCATION : COMPUTER SCIENCE @ JMU",
    "",
    "> GOALS : Make money",
    "",
    "> HOBBIES : Guitar, Reading, Video Games, Coding",
  ]);
});