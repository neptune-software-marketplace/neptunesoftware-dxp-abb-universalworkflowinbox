const requiredFields = ['informDetailUser', 'informDetailSubstitue', 'inFromDetailSubFromTo'];

function toggleEdit(status, data) {
    modelappControl.oData.enableEdit = status;
    modelappControlDia.setData(modelappControl.getData());
    modelappControl.refresh(true);
    modelappControlDia.refresh(true);

    if (data) {
        butDetailSetDisplay.setVisible(status);
        butDetailDelete.setVisible(status);
    } else {
        butDetailSetDisplay.setVisible(false);
        butDetailDelete.setVisible(false);
    }
}

function changeSubsMode() {
    if (modelappControl.oData.mySubst) { //MY SUBST:

       // oPageHeaderTitle.setText(txtAdoptHeader.getText());
        oDiaSubst.setTitle(txtAdoptHeader.getText());
        //oPageHeaderSubTitle.setText(txtAdoptSubHeader.getText());
        lblSubHeader.setText(txtAdoptSubHeader.getText());
        modelappControl.oData.mySubst = false;

    } else {
        //oPageHeaderTitle.setText(txtSubstHeader.getText());
        oDiaSubst.setTitle(txtSubstHeader.getText());
        //oPageHeaderSubTitle.setText(txtSubstSubHeader.getText());
        lblSubHeader.setText(txtSubstSubHeader.getText());
        modelappControl.oData.mySubst = true;

    }
    modelappControlDia.setData(modelappControl.getData());
    modelappControl.refresh(true);
    modelappControlDia.refresh(true);

}