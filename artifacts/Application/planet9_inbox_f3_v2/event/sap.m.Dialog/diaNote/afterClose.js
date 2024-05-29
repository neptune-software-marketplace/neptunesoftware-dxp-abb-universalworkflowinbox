diaNote.removeCustomData("userAction");
inNote.setValue();
butNoteSave.setText('Save');
butNoteSave.setType();

const origTitle = diaNote.getCustomData().find((item) => item.getId() == "origTitle");
objHeaderNote.setTitle(origTitle?.getValue() || "Note");
