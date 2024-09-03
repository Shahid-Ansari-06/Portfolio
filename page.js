const text = "Web Developer";
        const newText = "Graphic Designer";
        const typingSpeed = 100; 
        const erasingSpeed = 50;
        const delayBeforeErasing = 2000; 
        const delayBeforeTypingNewText = 1000; 
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
    
