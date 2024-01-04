"use client";

import { useRef } from "react";
import type { ReactNode, FormHTMLAttributes } from "react";

export type FormProps = {
  action: (formData: FormData) => Promise<void>;
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export function Form({ action, children, ...props }: FormProps) {
  let formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form
      {...props}
      ref={formRef}
      action={async (formData) => {
        await action(formData);
        formRef.current?.reset();
      }}
    >
      {children}
    </form>
  );
}
