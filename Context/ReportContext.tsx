import React, { createContext, useState, useContext } from 'react';

type Report = {
  id: string;
  type: string;
  weight: string;
  location: string;
  date: string;
};

type ReportContextType = {
  reports: Report[];
  addReport: (report: Report) => void;
};

const ReportContext = createContext<ReportContextType | undefined>(undefined);

export const useReportContext = () => {
  const context = useContext(ReportContext);
  if (!context) throw new Error('useReportContext must be used inside ReportProvider');
  return context;
};

export const ReportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reports, setReports] = useState<Report[]>([]);

  const addReport = (report: Report) => setReports(prev => [...prev, report]);

  return (
    <ReportContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportContext.Provider>
  );
};
