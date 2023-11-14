function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}


function showMaster(taskTitleClicked) {
    var taskItems = groupedInbox.get(taskTitleClicked);
    if (taskItems) {
        taskItems = JSON.parse(JSON.stringify(taskItems));
    } else {
        taskItems = [];
    }
    modeloListWorkflow.setData(taskItems);
    modeloListWorkflow.refresh();
    if (sap.n) {
        oLayoutMain.to(localViewID + '--oPageMaster');
    } else {
        oLayoutMain.to('oPageMaster');
    }
    oListWorkflow.removeSelections();
}



function showSubstitutions() {
    
if(sap.n.Launchpad.isPhone()){
    coltabSubTo.setVisible(false);
    coltabSubFrom.setVisible(false);
}else{
coltabSubTo.setVisible(true);
    coltabSubFrom.setVisible(true);
}

    toolStartUpdate.firePress();
    oDiaSubst.open();

}

function showSubstitutionsDetail() {


    if (sap.n) {
        oNavContainer.to(localViewID + '--oPageSubstDetail');
    } else {
        oNavContainer.to('oPageSubstDetails');
    }


}