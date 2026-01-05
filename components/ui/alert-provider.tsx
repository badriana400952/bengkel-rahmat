"use client";

import React, { createContext, useContext, useState } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

type AlertType = "success" | "error" | "warning" | "info";

type AlertOptions = {
  type?: AlertType;
  title?: string;
  text: string;
  onConfirm?: () => void;
};

type AlertContextType = {
  showAlert: (options: AlertOptions) => void;
};

const AlertContext = createContext<AlertContextType | null>(null);

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = useState<AlertOptions | null>(null);

  const showAlert = (options: AlertOptions) => {
    setAlert(options);
  };

  const closeAlert = () => {
    setAlert(null);
    alert?.onConfirm?.();
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}

      {alert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-xl animate-in zoom-in">
            <div className="mb-3 flex justify-center">
              {icon(alert.type)}
            </div>

            {alert.title && (
              <h2 className="text-xl font-semibold">{alert.title}</h2>
            )}

            <p className="mt-2 text-gray-600">{alert.text}</p>

            <button
              onClick={closeAlert}
              className="mt-5 w-full rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
}

function icon(type: AlertType = "info") {
  const base = "h-14 w-14";

  switch (type) {
    case "success":
      return <CheckCircle className={`${base} text-green-500`} />;
    case "error":
      return <XCircle className={`${base} text-red-500`} />;
    case "warning":
      return <AlertTriangle className={`${base} text-yellow-500`} />;
    default:
      return <Info className={`${base} text-blue-500`} />;
  }
}

export function useAlert() {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error("useAlert must be used inside AlertProvider");
  return ctx;
}
