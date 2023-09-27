import initTabs from "./assets/modules/tabs.js";
import {buildMemberList, buildResultList, members, results} from "./assets/modules/utils/utils.js";
import displayMembers from "./assets/modules/display-members.js";
import displayResults from "./assets/modules/display-results.js";

window.addEventListener('load', async (): Promise<void> => {
    initTabs();
    await buildMemberList();
    await buildResultList();
    displayMembers(members);
    displayResults(results);
});

