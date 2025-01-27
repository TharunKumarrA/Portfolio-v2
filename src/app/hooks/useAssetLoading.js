"use client";
import { useState, useEffect } from 'react';

export const useAssetLoading = () => {
  const [loading, setLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const fonts = [
      new FontFace('Space Mono', 'url(/fonts/space-mono.woff2)'),
      new FontFace('Rubik', 'url(/fonts/rubik.woff2)')
    ];
    
    let loadedImages = 0;
    let loadedFonts = 0;

    const checkAllLoaded = () => {
      if (loadedImages === images.length && loadedFonts === fonts.length) {
        setAssetsLoaded(true);
        setTimeout(() => setLoading(false), 500); // Add a small delay for smooth transition
      }
    };

    // Handle image loading
    images.forEach(img => {
      if (img.complete) {
        loadedImages++;
        checkAllLoaded();
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          checkAllLoaded();
        });
        img.addEventListener('error', () => {
          loadedImages++;
          checkAllLoaded();
        });
      }
    });

    // Handle font loading
    fonts.forEach(font => {
      font.load().then(() => {
        loadedFonts++;
        checkAllLoaded();
      }).catch(() => {
        loadedFonts++;
        checkAllLoaded();
      });
    });

    // If there are no assets to load, remove loading screen
    if (images.length === 0 && fonts.length === 0) {
      setAssetsLoaded(true);
      setTimeout(() => setLoading(false), 500);
    }

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', checkAllLoaded);
        img.removeEventListener('error', checkAllLoaded);
      });
    };
  }, []);

  return { loading, assetsLoaded };
};