import React, { useState, useEffect, useRef } from "react";
import {
  Input,
  InputBase,
  OutlinedInput,
  FilledInput,
} from "@material-ui/core";

interface IEditableTextProps {
  editing?: boolean;
  text?: string;
  onEditEnd?: (text: string) => void;
  /**
   * 是否自动选中文字，默认不自动选中
   */
  autoSelect?: boolean;
  inputType?: "base" | "outlined" | "standard" | "filled";
}

const getInputByType = (type: IEditableTextProps["inputType"]) => {
  switch (type) {
    case "base":
      return InputBase;
    case "filled":
      return FilledInput;
    case "outlined":
      return OutlinedInput;
    case "standard":
      return Input;
    default:
      return Input;
  }
};

const EditableText: React.FC<IEditableTextProps> = ({
  editing = false,
  text = "",
  onEditEnd,
  autoSelect = false,
  inputType = "standard",
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
        if (autoSelect) {
          inputRef.current?.select();
        }
      }, 0);
    }
  }, [autoSelect, editing]);

  if (editing) {
    const Input = getInputByType(inputType);
    return (
      <Input
        inputRef={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => {
          onEditEnd && onEditEnd(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEditEnd && onEditEnd(inputValue);
          }
        }}
      />
    );
  }

  return <>{text}</>;
};

export default EditableText;
