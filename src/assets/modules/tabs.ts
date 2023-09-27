let selectedTab: HTMLElement | null = null;

function initTabs(): void {
    // setup tab-toggling
    document.querySelectorAll<HTMLElement>("#tabs h2").forEach((tab) =>
        tab.addEventListener("click", selectTab)
    );
    // click the first tab to enable everything
    const firstTab = document.querySelector<HTMLElement>("#tabs h2");
    if (firstTab) {
        firstTab.click();
    }
}

function selectTab(event: MouseEvent): void {
    const tab = event.target as HTMLElement;
    if (!tab) return;
    // only accept click if tab isn't selected
    if (!tab.classList.contains("selected")) {
        // unselect last tab - if any
        if (selectedTab) {
            selectedTab.classList.remove("selected");
            const tabToShow = document.querySelector<HTMLElement>(
                `#${selectedTab.dataset.tabShow}`
            );
            if (tabToShow) {
                tabToShow.classList.add("hide");
            }
        }
        // select this tab
        tab.classList.add("selected");
        const tabToShow = document.querySelector<HTMLElement>(
            `#${tab.dataset.tabShow}`
        );
        if (tabToShow) {
            tabToShow.classList.remove("hide");
        }

        // remember the selected tab
        selectedTab = tab;
    }
}
export default initTabs;