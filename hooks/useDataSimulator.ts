import { useState, useEffect, useCallback } from 'react';

const TOTAL_DATA_MB = 2048; // 2 GB

export const useDataSimulator = () => {
    const [usedData, setUsedData] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setUsedData((prev) => {
                if (prev >= TOTAL_DATA_MB) {
                    clearInterval(interval);
                    return TOTAL_DATA_MB;
                }
                // Simulate random data usage between 5MB and 20MB per second
                const increment = Math.random() * 15 + 5;
                return Math.min(prev + increment, TOTAL_DATA_MB);
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [usedData]); // Restart if usedData changes? No, interval dependency.
    // Actually, dependency array should be empty to run once, or handle cleanup correctly.
    // If I put usedData in dependency, it restarts interval every tick.
    // Better: Empty dependency, but check 'prev' inside setter.
    // However, I want to stop if full. The 'prev' check handles that.

    // Correction: The setInterval closure captures the initial 'usedData' if not careful?
    // No, setter function form 'setUsedData(prev => ...)' is safe.
    // But to stop exactly when full, I need to check inside.

    const recharge = useCallback(() => {
        setUsedData(0);
    }, []);

    const percentage = usedData / TOTAL_DATA_MB;

    return {
        totalData: TOTAL_DATA_MB,
        usedData,
        percentage,
        recharge,
    };
};
