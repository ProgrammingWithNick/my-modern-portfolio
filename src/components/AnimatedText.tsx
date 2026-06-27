import React, { useEffect, useState } from 'react';

export const AnimatedTyping: React.FC<{ words: string[] }> = ({ words }) => {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[currentWordIdx].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1200);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, currentWordIdx, words]);

  return (
    <span className="text-brand-accentBlue font-mono border-r-2 border-brand-accentBlue pr-1 animate-pulse">
      {words[currentWordIdx].substring(0, subIndex)}
    </span>
  );
};