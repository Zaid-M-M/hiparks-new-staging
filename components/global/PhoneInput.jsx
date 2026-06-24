"use client";

/**
 * PhoneInput – Global reusable phone input component.
 *
 * Rules enforced:
 *  • Only digits (0-9), a single leading '+', and spaces are accepted.
 *  • '+' is only allowed as the very first character and only once.
 *  • No two consecutive spaces are allowed (e.g. "91  9" is blocked).
 *  • On paste, the pasted text is sanitised through the same rules before
 *    being applied, so nothing invalid can sneak in via copy-paste.
 *
 * Usage (drop-in replacement for <input type="text">):
 *   import PhoneInput from "@/components/global/PhoneInput";
 *
 *   <PhoneInput
 *     name="phone"
 *     value={phone}
 *     onChange={handleChange}   // receives the cleaned string, not an event
 *     className="..."
 *     placeholder="Phone No*"
 *   />
 *
 * `onChange` is called with the cleaned string value directly.
 * All other props (className, placeholder, id, …) are forwarded as-is.
 */

import React from "react";

const PhoneInput = ({ onChange, value = "", className, ...rest }) => {
  /** Sanitise a raw string to comply with all phone rules. */
  const sanitise = (raw) => {
    // 1. Strip anything that is disallowed
    let cleaned = raw.replace(/[^\d\s+]/g, "");

    // 2. Keep '+' only if it is at position 0; remove every other '+'
    cleaned = cleaned.replace(/(?!^)\+/g, "");

    // 3. Prevent leading spaces (especially "+ ")
    cleaned = cleaned.replace(/^\s+/, "");
    cleaned = cleaned.replace(/^\+\s+/, "+");

    // 4. Prevent consecutive spaces
    cleaned = cleaned.replace(/\s\s+/g, " ");

    return cleaned;
  };

  const handleKeyDown = (e) => {
    const { key, target } = e;
    const { value: cur, selectionStart: pos } = target;

    const navKeys = [
      "Backspace", "Delete", "ArrowLeft", "ArrowRight",
      "ArrowUp", "ArrowDown", "Tab", "Home", "End",
    ];

    // Always allow navigation / editing keys
    if (navKeys.includes(key)) return;

    // Allow Ctrl/Cmd combos (copy, paste, select-all …)
    if (e.ctrlKey || e.metaKey) return;

    if (key === "+") {
      // Only at position 0 and only if no '+' exists yet
      if (pos !== 0 || cur.includes("+")) {
        e.preventDefault();
      }
      return;
    }

    if (key === " ") {
      // Block if the character immediately before the cursor is already a space
      if (cur[pos - 1] === " ") {
        e.preventDefault();
      }
      return;
    }

    // Allow digits
    if (/^\d$/.test(key)) return;

    // Block everything else
    e.preventDefault();
  };

  const handleChange = (e) => {
    const cleaned = sanitise(e.target.value);
    if (typeof onChange === "function") {
      onChange(cleaned);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text");
    const { target } = e;
    const before = (value || "").slice(0, target.selectionStart);
    const after = (value || "").slice(target.selectionEnd);
    const cleaned = sanitise(before + pasted + after);
    if (typeof onChange === "function") {
      onChange(cleaned);
    }
  };

  const handleBlur = (e) => {
    const trimmed = e.target.value.trimEnd();
    if (trimmed !== e.target.value && typeof onChange === "function") {
      onChange(trimmed);
    }
  };

  return (
    <input
      type="text"
      inputMode="tel"
      value={value}
      className={className}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onPaste={handlePaste}
      onBlur={handleBlur}
      {...rest}
    />
  );
};

export default PhoneInput;
