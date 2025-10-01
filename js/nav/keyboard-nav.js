// keyboard-nav.js
// keyboard-nav.js

addEventListener('keydown', e => {
    const key = e.key.toLowerCase();

    // Only single alphanumeric characters (letters + numbers)
    if (key.length !== 1 || !/^[a-z0-9]$/.test(key)) return;

    // Get all visible focusable elements
    const focusableEls = [...document.querySelectorAll('a, [id]')].filter(el => {
        const rect = el.getBoundingClientRect();
        return el.offsetParent !== null && rect.width > 0 && rect.height > 0;
    });

    if (!focusableEls.length) return;


    // Filter by first number OR first letter in the element text
    const matchingEls = focusableEls.filter(el => {
        const text = el.innerText.trim().toLowerCase();

        // Find first digit
        const numMatch = text.match(/[0-9]/);
        // Find first letter
        const letterMatch = text.match(/[a-z]/);

        return (numMatch && numMatch[0] === key) ||
            (letterMatch && letterMatch[0] === key);
    });

    if (matchingEls.length === 0) return;

    console.log("Matched elements:", matchingEls);

    // Placeholder: determine which element to focus based on the pressed key
    // const nextElement = getElementToFocus(focusableElements, key);

    if (window.lastLetterPressed === key) {
        // Cycle within the same letter group
        const iMatchingEls = matchingEls.indexOf(activeEl);

        if (e.shiftKey) {
            // backwards in the group
            target = matchingEls[(iMatchingEls - 1 + matchingEls.length) % matchingEls.length];
        } else {
            // forwards in the group
            target = matchingEls[(iMatchingEls + 1) % matchingEls.length];
        }
    } else {
        // Fresh letter press → start from beginning (or end if Shift)
        target = e.shiftKey ? matchingEls[matchingEls.length - 1] : matchingEls[0];
    }

    target?.focus();
    window.lastLetterPressed = key;

});

/**
 * Decide which element should receive focus based on the pressed key.
 * Right now, this is a stub returning the first match.
 * Later we can enhance it with spatial logic or key-specific shortcuts.
 */
// Example placeholder: first element whose id or text starts with the key
// function getElementToFocus(elements, key) {
//     return elements.find(el => {
//         const text = el.innerText || el.id || '';
//         return text.trim().toLowerCase().startsWith(key);
//     }) || null;
// }
