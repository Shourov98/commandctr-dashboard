"use client";

import { useRef, useState, type ClipboardEvent } from "react";

const OTP_LENGTH = 4;

export default function OtpInput() {
  const [values, setValues] = useState<string[]>(Array.from({ length: OTP_LENGTH }, () => ""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const focusAt = (index: number) => {
    const target = inputRefs.current[index];
    if (target) {
      target.focus();
      target.select();
    }
  };

  const updateValue = (index: number, value: string) => {
    const next = [...values];
    next[index] = value;
    setValues(next);
  };

  const handleChange = (index: number, rawValue: string) => {
    const digits = rawValue.replace(/\D/g, "");

    if (!digits) {
      updateValue(index, "");
      return;
    }

    if (digits.length === 1) {
      updateValue(index, digits);
      if (index < OTP_LENGTH - 1) {
        focusAt(index + 1);
      }
      return;
    }

    const next = [...values];
    for (let i = 0; i < OTP_LENGTH; i += 1) {
      next[i] = digits[i] ?? "";
    }
    setValues(next);
    const focusIndex = Math.min(digits.length, OTP_LENGTH - 1);
    focusAt(focusIndex);
  };

  const handleKeyDown = (index: number, key: string) => {
    if (key === "Backspace" && !values[index] && index > 0) {
      focusAt(index - 1);
      return;
    }

    if (key === "ArrowLeft" && index > 0) {
      focusAt(index - 1);
      return;
    }

    if (key === "ArrowRight" && index < OTP_LENGTH - 1) {
      focusAt(index + 1);
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pastedDigits = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pastedDigits) {
      return;
    }

    const next = Array.from({ length: OTP_LENGTH }, (_, i) => pastedDigits[i] ?? "");
    setValues(next);
    focusAt(Math.min(pastedDigits.length, OTP_LENGTH - 1));
  };

  return (
    <div className="otp-grid">
      {values.map((value, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          ref={(node) => {
            inputRefs.current[index] = node;
          }}
          aria-label={`OTP digit ${index + 1}`}
          inputMode="numeric"
          maxLength={4}
          className="auth-input otp-cell"
          value={value}
          onChange={(event) => handleChange(index, event.target.value)}
          onPaste={handlePaste}
          onKeyDown={(event) => handleKeyDown(index, event.key)}
          autoFocus={index === 0}
        />
      ))}
    </div>
  );
}
