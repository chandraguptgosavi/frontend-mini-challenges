const outerCheckBox = document.getElementById('outer-checkbox'), innerCheckbox = document.getElementById('inner-checkbox');

outerCheckBox.addEventListener('change', (event) => {
    if (outerCheckBox.checked) {
        document.body.classList.add('dark');
        innerCheckbox.checked = true;
    } else {
        document.body.classList.remove("dark");
        innerCheckbox.checked = false;
    }
});