import initTabs from "./assets/modules/tabs.js";
import {buildMemberList, buildResultList, members, results} from "./assets/modules/utils/utils.js";
import displayMembers from "./assets/modules/display-members.js";

window.addEventListener('load', async (): Promise<void> => {
    initTabs();
    await buildMemberList();
    await buildResultList();
    console.log(results)
    displayMembers(members);
});

