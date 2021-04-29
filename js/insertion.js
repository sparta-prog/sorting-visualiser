async function insertion() {
    console.log("in here");
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'yellow';
    for(let i = 1;i < ele.length;i++){
        // select
        let j = i - 1;
        let key = ele[i].style.height;
        // color change of current
        ele[i].style.background = 'blue';

        await animate(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            // a[j+1] = a[j];
            ele[j].style.background = 'red';
            ele[j+1].style.height = ele[j].style.height;
            j--;

            await animate(delay);

            // color
            for(let k = i;k >= 0;k--){
                ele[k].style.background = 'yellow';
            }
        }
        // insert the element
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'yellow';
    }
}

const insertionButton = document.querySelector(".insertionSort");

insertionButton.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})