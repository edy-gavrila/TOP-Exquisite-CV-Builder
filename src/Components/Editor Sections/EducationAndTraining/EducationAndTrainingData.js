import React, { useState } from "react";
import EducationAndTrainingItem from "./EducationAndTrainingItem";
import EducationAndTrainingItemForm from "./EducationAndTrainingItemForm";

const notEditingState = {
  editing: false,
  itemToEditNumber: -1,
};

function EducationAndTrainingData({
  edAndTrainData,
  onSaveEditedItem,
  onDeleteItem,
}) {
  const [editingItem, setEditingItem] = useState(notEditingState);

  const cancelEditingHandler = () => setEditingItem(notEditingState);
  const setEditingHandler = (itemNumber) =>
    setEditingItem({ editing: true, itemToEditNumber: itemNumber });

  const educationAndTrainingItems = edAndTrainData.map(
    (edAndTrainItem, idx) => {
      if (editingItem.itemToEditNumber !== idx) {
        return (
          <EducationAndTrainingItem
            key={idx}
            itemNumber={idx + 1}
            edAndTrainData={edAndTrainItem}
            onSetEditing={setEditingHandler}
            onDeleteItem={() => onDeleteItem(idx)}
          />
        );
      } else {
        return (
          <EducationAndTrainingItemForm
            key={idx}
            educationAndTrainingData={edAndTrainItem}
            itemNumber={idx + 1}
            onSaveEducationAndTrainingData={onSaveEditedItem}
            onCancelEditing={cancelEditingHandler}
          />
        );
      }
    }
  );
  return <React.Fragment>{educationAndTrainingItems}</React.Fragment>;
}

export default EducationAndTrainingData;
