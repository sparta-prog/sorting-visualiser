async function selection() {
    console.log('Entered here');
    const element = document.querySelectorAll(".bar");
}

const selectionSortBtn = document.querySelector(".selectionSort");
selectionSortBtn.addEventListener('click', () => {
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeSlider();
    console.log('here guys!!');

    await selection();

    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})