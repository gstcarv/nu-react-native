import { createContext, PropsWithChildren, useContext, useState } from "react";

type ValueSettingsContextType = {
    showValue: boolean;
    toggleValue: () => void;
};

const ValueSettingsContext = createContext<ValueSettingsContextType>({} as ValueSettingsContextType);

export const ValueSettingsProvider = ({ children }: PropsWithChildren) => {
    const [showValue, setShowValue] = useState(true);

    function toggleValue() {
        setShowValue(!showValue);
    }

    return <ValueSettingsContext.Provider value={{ showValue, toggleValue }}>{children}</ValueSettingsContext.Provider>;
};

export const useValueSettings = () => useContext(ValueSettingsContext);
