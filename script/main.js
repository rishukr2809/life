// Romantic Quotes for each memory
const memoryQuotes = [
  "Every moment with you is a treasure I hold close to my heart... 💖",
  "You're the reason I believe in love at first sight... 😍",
  "In your smile, I found my favorite place in the world... ✨",
  "Loving you is the best decision I ever made... 💕",
  "You make my ordinary days feel extraordinary... 🌟",
  "With you, every day feels like Valentine's Day... 💝",
  "You're not just my love, you're my best friend... 👫",
  "My heart beats faster every time I see you... 💓",
  "You complete me in ways I never knew I needed... 🧩",
  "Forever wouldn't be long enough with you... ⏰",
  "You're my sunshine on the cloudiest days... ☀️",
  "I fall in love with you more every single day... 🌹",
  "You're the dream I never want to wake up from... 💭",
  "You're my favorite hello and hardest goodbye... 👋",
  "You're the missing piece I've been searching for... 💞",
  "With you, I'm the best version of myself... ✨",
  "You make my heart smile... 😊",
  "Together is my favorite place to be... 💑"
];

// Floating Hearts Background Animation
const createFloatingHearts = () => {
  const heartsBackground = document.getElementById('heartsBackground');
  
  const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘'];
  
  const createHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    // Random starting position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 10 + 8) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    
    heartsBackground.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 20000);
  };
  
  // Create initial hearts
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 400);
  }
  
  // Continuously create new hearts
  setInterval(createHeart, 1500);
};

// Animation Timeline
const animationTimeline = () => {
  // Split chars for animation
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = gsap.timeline();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(".one", 0.7, {
      opacity: 0,
      y: 10,
    }, "+=2.5")
    .to(".two", 0.7, {
      opacity: 0,
      y: 10,
    }, "-=1")
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(".three", 0.7, {
      opacity: 0,
      y: 10,
    }, "+=2")
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .to(".hbd-chatbox span", {
      visibility: "visible",
      stagger: 0.05,
      duration: 0.5
    })
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(".four", 0.5, {
      scale: 0.2,
      opacity: 0,
      y: -150,
    }, "+=0.7")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-5", 0.7, {
      rotationX: 15,
      rotationZ: -10,
      skewY: "-5deg",
      y: 50,
      z: 10,
      opacity: 0,
    }, "+=0.5")
    .to(".idea-5 span", 0.7, {
      rotation: 90,
      x: 8,
    }, "+=0.4")
    .to(".idea-5", 0.7, {
      scale: 0.2,
      opacity: 0,
    }, "+=2")
    .from(".idea-6 span", {
      scale: 3,
      opacity: 0,
      rotation: 15,
      ease: "expo.out",
      stagger: 0.2,
      duration: 0.8
    })
    .to(".idea-6 span", {
      scale: 3,
      opacity: 0,
      rotation: -15,
      ease: "expo.out",
      stagger: 0.2,
      duration: 0.8
    }, "+=1")
    .fromTo(".baloons img", {
      opacity: 0.9,
      y: 1400,
    }, {
      opacity: 1,
      y: -1000,
      stagger: 0.2,
      duration: 2.5
    })
    .from(".girl-dp", 0.5, {
      scale: 3.5,
      opacity: 0,
      x: 25,
      y: -25,
      rotationZ: -45,
    }, "-=2")
    .from(".wish-hbd span", {
      opacity: 0,
      y: -50,
      rotation: 150,
      skewX: "30deg",
      ease: "elastic.out(1, 0.5)",
      stagger: 0.1,
      duration: 0.7
    })
    .fromTo(".wish-hbd span", {
      scale: 1.4,
      rotationY: 150,
    }, {
      scale: 1,
      rotationY: 0,
      color: "#ff69b4",
      ease: "expo.out",
      stagger: 0.1,
      duration: 0.7
    }, "party")
    .from(".wish h5", 0.5, {
      opacity: 0,
      y: 10,
      skewX: "-15deg",
    }, "party")
    .to(".eight svg", {
      visibility: "visible",
      opacity: 0,
      scale: 80,
      repeat: 3,
      repeatDelay: 1.4,
      stagger: 0.3,
      duration: 1.5
    })
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .from(".memories-section", 0.8, {
      opacity: 0,
      y: 50,
    }, "+=0.5")
    .call(() => {
      startMemorySlideshow();
    });
};

// Memory Slideshow Handler with Auto-play
let currentMemoryIndex = 0;
let memoryInterval;

const startMemorySlideshow = () => {
  const memoryImage = document.getElementById('memoryImage');
  const memoryQuote = document.getElementById('memoryQuote');
  const currentMemorySpan = document.getElementById('currentMemory');
  const progressFill = document.getElementById('progressFill');
  
  const updateMemory = (index) => {
    // Fade out
    gsap.to([memoryImage, memoryQuote], {
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      onComplete: () => {
        // Update content
        memoryImage.src = `memories/${index + 1}.jpg`;
        memoryQuote.textContent = memoryQuotes[index];
        currentMemorySpan.textContent = index + 1;
        
        // Update progress bar
        const progress = ((index + 1) / 18) * 100;
        gsap.to(progressFill, {
          width: progress + '%',
          duration: 0.5
        });
        
        // Fade in
        gsap.to([memoryImage, memoryQuote], {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
        
        // Animate heart particles
        gsap.fromTo('.heart-particle', {
          opacity: 0,
          y: 20,
          scale: 0
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        });
      }
    });
  };
  
  // Auto-play slideshow
  memoryInterval = setInterval(() => {
    currentMemoryIndex++;
    
    if (currentMemoryIndex < 18) {
      updateMemory(currentMemoryIndex);
    } else {
      // End of slideshow - show Valentine question
      clearInterval(memoryInterval);
      setTimeout(() => {
        showValentineQuestion();
      }, 2000);
    }
  }, 3500); // 3.5 seconds per image
  
  // Initialize first memory
  updateMemory(0);
};

// Show Valentine Question
const showValentineQuestion = () => {
  gsap.to(".memories-section", {
    opacity: 0,
    y: -50,
    duration: 0.8,
    onComplete: () => {
      document.querySelector('.memories-section').style.display = 'none';
      
      gsap.fromTo(".valentine-question", {
        display: 'flex',
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)"
      });
    }
  });
};

// Valentine Question Handler with No Button Prank
const handleValentineQuestion = () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const loveResponse = document.getElementById("loveResponse");
  const valentineQuestion = document.querySelector(".valentine-question");
  
  let noBtnSize = 1;
  
  // Yes button - Show love response with pataka animation
  yesBtn.addEventListener("click", () => {
    gsap.to(valentineQuestion, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      onComplete: () => {
        valentineQuestion.style.display = 'none';
        loveResponse.style.display = 'flex';
        
        gsap.fromTo(loveResponse, {
          opacity: 0,
          scale: 0.8
        }, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          onComplete: () => {
            createPatakaAnimation();
            createConfetti();
          }
        });
        
        // Scroll to response
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }, 300);
      }
    });
  });

  // No button - Move away on hover and click (prank)
  const moveNoButton = () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    gsap.to(noBtn, {
      x: randomX - noBtn.offsetLeft,
      y: randomY - noBtn.offsetTop,
      duration: 0.3,
      ease: "power2.out"
    });
    
    // Make Yes button bigger each time
    noBtnSize += 0.1;
    gsap.to(yesBtn, {
      scale: Math.min(noBtnSize, 1.5),
      duration: 0.3
    });
  };
  
  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
  });
  
  // Mobile touch support
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
  });
};

// Pataka (Fireworks) Animation
const createPatakaAnimation = () => {
  const container = document.getElementById('patakaContainer');
  const colors = ['#ff6b9d', '#c41e3a', '#ffd700', '#ff1493', '#ff69b4', '#ff4500'];
  
  const createFirework = (x, y) => {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'pataka-particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const angle = (Math.PI * 2 * i) / 30;
      const velocity = 100 + Math.random() * 100;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      container.appendChild(particle);
      
      gsap.to(particle, {
        x: tx,
        y: ty,
        opacity: 0,
        duration: 1 + Math.random(),
        ease: "power2.out",
        onComplete: () => particle.remove()
      });
    }
  };
  
  // Create multiple fireworks
  const positions = [
    { x: window.innerWidth * 0.2, y: window.innerHeight * 0.3 },
    { x: window.innerWidth * 0.5, y: window.innerHeight * 0.2 },
    { x: window.innerWidth * 0.8, y: window.innerHeight * 0.3 },
    { x: window.innerWidth * 0.35, y: window.innerHeight * 0.5 },
    { x: window.innerWidth * 0.65, y: window.innerHeight * 0.5 },
  ];
  
  positions.forEach((pos, index) => {
    setTimeout(() => createFirework(pos.x, pos.y), index * 300);
  });
  
  // Repeat fireworks
  setInterval(() => {
    const randomPos = positions[Math.floor(Math.random() * positions.length)];
    createFirework(randomPos.x, randomPos.y);
  }, 1500);
};

// Confetti Animation
const createConfetti = () => {
  const container = document.getElementById('confettiContainer');
  const confettiCount = 100;
  const colors = ['#ff6b9d', '#c41e3a', '#ffd700', '#ff1493', '#ff69b4', '#ff69b4'];
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    container.appendChild(confetti);
  }
};

// Fetch customization data
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).forEach((customData) => {
        if (data[customData] !== "") {
          const element = document.getElementById(customData);
          if (element) {
            if (customData === "imagePath") {
              element.setAttribute("src", data[customData]);
            } else {
              element.innerText = data[customData];
            }
          }
        }
      });
    })
    .catch(() => {
      console.log("Using default values");
    });
};

// Initialize everything
const init = () => {
  fetchData();
  createFloatingHearts();
  animationTimeline();
  handleValentineQuestion();
};

// Start when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
