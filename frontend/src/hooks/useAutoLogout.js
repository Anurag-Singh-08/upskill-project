// hooks/useAutoLogout.js - SAFE VERSION
import { useEffect, useRef } from "react";
import { isExpired, logout } from "../utils/tokenManager";

export default function useAutoLogout() {
  const hasChecked = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Prevent multiple checks
    if (hasChecked.current) return;
    hasChecked.current = true;

    const checkAndHandleExpiry = () => {
      if (isExpired()) {
        logout();
        window.location.href = "/login";
        return true; // Indicate logout happened
      }
      return false; // Token still valid
    };

    // Check immediately on mount
    if (checkAndHandleExpiry()) {
      return; // Already logged out, no need to set up further checks
    }

    // Calculate time until expiry
    const expiryTime = localStorage.getItem("token_expiry");
    if (expiryTime) {
      const timeUntilExpiry = Number(expiryTime) - Date.now();
      
      // Only set timeout if token hasn't expired yet
      if (timeUntilExpiry > 0) {
        // Schedule logout at exact expiry time
        timeoutRef.current = setTimeout(() => {
          logout();
          window.location.href = "/login";
        }, timeUntilExpiry);
      }
    }

    // Also set up a safety check every 30 seconds
    const safetyInterval = setInterval(() => {
      checkAndHandleExpiry();
    }, 30000); // 30 seconds - SAFE interval

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      clearInterval(safetyInterval);
    };
  }, []); // Empty dependency array - runs once
}