import React from "react";
import CustomText from "../../../components/CustomText";
import { Note } from "../../../types/note";

const EmptyListMessage = ({
  section,
}: {
  section: { title: string; data: Note[] };
}) => {
  return (
    <>
      {section.data.length === 0 ? (
        <CustomText>{"No notes available."}</CustomText>
      ) : null}
    </>
  );
};

export default EmptyListMessage;
