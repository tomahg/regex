const regexInput = document.getElementById('regexInput');
const regexLength = document.getElementById('regexLength');
const matchList = document.querySelectorAll('#matchList li');
const nonMatchList = document.querySelectorAll('#nonMatchList li');

function updateMatches() {
    const pattern = regexInput.value;
    regexLength.textContent = `Lengde: ${pattern.length}`;

    let regex;
    try {
    regex = new RegExp(`^${pattern}$`);
    } catch (e) {
    matchList.forEach(el => el.className = '');
    nonMatchList.forEach(el => el.className = '');
    return;
    }

    matchList.forEach(el => {
    el.className = regex.test(el.textContent) ? 'ok' : 'not-ok';
    });

    nonMatchList.forEach(el => {
    el.className = !regex.test(el.textContent) ? 'ok' : 'not-ok';
    });
}

regexInput.addEventListener('input', updateMatches);

// Initial evaluation on page load
updateMatches();