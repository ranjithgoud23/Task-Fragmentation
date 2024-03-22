import React from 'react';

interface AppToastProps {
  position: { vertical: string; horizontal: string };
  message: string;
  severity: any; // Replace with the actual type of severity
}

const AppToast: React.FC<AppToastProps> = ({
  position,
  message,
  severity,
}) => {
  return(
    <div>
        position={{ vertical: "bottom", horizontal: "center" }}
        message={toastMsg}
        severity={toastSev}
    </div>
  );
};

export default AppToast;