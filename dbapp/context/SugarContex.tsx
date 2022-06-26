import { useState, createContext, FC, SetStateAction, Dispatch } from 'react';

type SugarContextType = {
  insulinRecords: InsulinRecordType[];
  setInsulinRecord: Dispatch<SetStateAction<InsulinRecordType[]>> | void;
  sugarRecords: SugarRecordType[];
  setSugarRecord: Dispatch<SetStateAction<SugarRecordType[]>> | void;
};

export type InsulinRecordType = {
  dateTime: Date;
  amount: number;
};

export type SugarRangesType = 'low' | 'ok' | 'high';

export type SugarRecordType = {
  dateTime: Date;
  value: number;
  range: SugarRangesType;
};

export const SugarCtxProvider: FC = ({ children }) => {
  const [insulinRecords, setInsulinRecord] = useState<InsulinRecordType[]>([]);
  const [sugarRecords, setSugarRecord] = useState<SugarRecordType[]>([]);

  return (
    <SugarContext.Provider
      value={{
        insulinRecords,
        setInsulinRecord,
        sugarRecords,
        setSugarRecord,
      }}
    >
      {children}
    </SugarContext.Provider>
  );
};

export const SugarContext = createContext<SugarContextType>({
  insulinRecords: [],
  setInsulinRecord: () => {},
  sugarRecords: [],
  setSugarRecord: () => {},
});
