let selectedTab = null;
function initTabs() {
    document.querySelectorAll("#tabs h2").forEach((tab) => tab.addEventListener("click", selectTab));
    const firstTab = document.querySelector("#tabs h2");
    if (firstTab) {
        firstTab.click();
    }
}
function selectTab(event) {
    const tab = event.target;
    if (!tab)
        return;
    if (!tab.classList.contains("selected")) {
        if (selectedTab) {
            selectedTab.classList.remove("selected");
            const tabToShow = document.querySelector(`#${selectedTab.dataset.tabShow}`);
            if (tabToShow) {
                tabToShow.classList.add("hide");
            }
        }
        tab.classList.add("selected");
        const tabToShow = document.querySelector(`#${tab.dataset.tabShow}`);
        if (tabToShow) {
            tabToShow.classList.remove("hide");
        }
        selectedTab = tab;
    }
}
export default initTabs;
