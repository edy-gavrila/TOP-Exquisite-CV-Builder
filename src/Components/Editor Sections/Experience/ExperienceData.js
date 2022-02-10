import React, { useState } from "react";
import ExperienceItem from "./ExperienceItem";
import ExperienceItemForm from "./ExperienceItemForm";

const notEditingState = {
  editing: false,
  itemToEditNumber: -1,
};

function ExperienceData({ workExpData, onSaveEditedItem, onDeleteItem }) {
  const [editingItem, setEditingItem] = useState(notEditingState);
  const cancelEditingHandler = () => setEditingItem(notEditingState);
  const setEditingHandler = (itemNumber) =>
    setEditingItem({ editing: true, itemToEditNumber: itemNumber });

  const experienceItems = workExpData.map((workExpItem, idx) => {
    if (editingItem.itemToEditNumber !== idx) {
      return (
        <ExperienceItem
          key={idx}
          itemNumber={idx + 1}
          workExpData={workExpItem}
          onSetEditing={setEditingHandler}
          onDeleteItem={() => onDeleteItem(idx)}
        />
      );
    } else {
      return (
        <ExperienceItemForm
          key={idx}
          experienceData={workExpItem}
          itemNumber={idx + 1}
          onSaveExperienceData={onSaveEditedItem}
          onCancelEditing={cancelEditingHandler}
        />
      );
    }
  });

  return <React.Fragment>{experienceItems}</React.Fragment>;
}

export default ExperienceData;
