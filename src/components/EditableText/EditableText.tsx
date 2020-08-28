import React, { useState, useEffect, useRef } from "react";
import Input from "@material-ui/core/Input";

interface IEditableTextProps {
  editing?: boolean;
  text?: string;
  onEditEnd?: (text: string) => void;
}

const EditableText: React.FC<IEditableTextProps> = ({
  editing,
  text,
  onEditEnd,
}) => {
  const [inputValue, setInputValue] = useState(text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(text);
  }, [text]);

  useEffect(() => {
    if (editing) {
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 0);
    }
  }, [editing]);

  if (editing)
    return (
      <Input
        inputRef={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => {
          console.log("blur");
          onEditEnd && onEditEnd(e.target.value);
        }}
      />
    );
  return <>{text}</>;
};

export default EditableText;
