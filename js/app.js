const pageNumber = (total, max, current) => {
    const half = Math.round(max / 2); //5
    let to = max; //10
        //10      //5     //100
    if(current + half >= total) {
        to = total; //100
    } else if (current > half) {
        to = current + half;
    }

    let from = to - max;

    return Array.from({length: max}, (_, i) => (i + 1) + from);
};

function PaginationButtons(totalPages, maxPageVisible = 10, currentPage = 1) {
    let pages = pageNumber(totalPages, maxPageVisible, currentPage);
    let currentPageBtn = null;

    const paginationButtonsContainer = document.createElement('div');
    paginationButtonsContainer.className = '';

    console.log(this);
}

// https://www.youtube.com/watch?v=5ZNuSoAv3qY

const paginationButtons = new PaginationButtons(100);