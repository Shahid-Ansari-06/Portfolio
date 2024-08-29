const text = "Web Developer";
        const newText = "Graphic Designer";
        const typingSpeed = 100; // Speed of typing
        const erasingSpeed = 50; // Speed of erasing
        const delayBeforeErasing = 2000; // Delay before starting to erase
        const delayBeforeTypingNewText = 1000; // Delay before typing new text
        const dynamicText = document.getElementById('dynamic-text');
        
        function type(text, callback) {
            let charIndex = 0;
            dynamicText.textContent = '';
            function typing() {
                if (charIndex < text.length) {
                    dynamicText.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typing, typingSpeed);
                } else if (callback) {
                    setTimeout(callback, delayBeforeErasing);
                }
            }
            typing();
        }
        
        function erase(callback) {
            let charIndex = dynamicText.textContent.length;
            function erasing() {
                if (charIndex > 0) {
                    dynamicText.textContent = dynamicText.textContent.slice(0, -1);
                    charIndex--;
                    setTimeout(erasing, erasingSpeed);
                } else if (callback) {
                    setTimeout(callback, delayBeforeTypingNewText);
                }
            }
            erasing();
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            type(text, () => {
                erase(() => {
                    type(newText);
                });
            });
        });
    