"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
} from "lucide-react";
import React from "react";

type AlertType = "success" | "error" | "warning" | "info";

type AlertProps = {
  type?: AlertType;
  text: string;
  title?: string;
};

const iconMap: Record<AlertType, React.ReactNode> = {
  success: <CheckCircle />,
  error: <XCircle />,
  warning: <AlertTriangle />,
  info: <Info />,
};

const variantMap: Record<AlertType, "default" | "destructive"> = {
  success: "default",
  info: "default",
  warning: "destructive",
  error: "destructive",
};

export function alerts({ type = "info", text, title }: AlertProps) {
  return (
    <Alert variant={variantMap[type]} className="p-2">
      {iconMap[type]}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{text}</AlertDescription>
    </Alert>
  );
}
