import initTabs from "./assets/modules/tabs.js";
import {buildMemberList, buildResultList} from "./assets/modules/utils/utils.js";

window.addEventListener('load', ():void => {
    initTabs();
    buildMemberList();
    buildResultList();
});

