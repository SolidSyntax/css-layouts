const intializePerfectScrollbar = () => {
    const container = document.querySelector('#fixed-panel');
     new PerfectScrollbar(container);
};

window.onload = intializePerfectScrollbar;