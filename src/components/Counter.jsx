import React, { useState, useEffect } from 'react';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const endValue = parseInt(end.toString().replace(/,/g, ''));

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function (easeOutQuad)
            const easedPercentage = percentage * (2 - percentage);

            const currentCount = Math.floor(easedPercentage * endValue);
            setCount(currentCount);

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    // Format number with commas
    const formattedCount = count.toLocaleString();

    return <span>{formattedCount}{suffix}</span>;
};

export default Counter;
