/**
 * Check if the JWT token is expired.
 * @param {string} token - The JWT token.
 * @returns {boolean} - Returns true if the token is expired, false otherwise.
 */
 export function isTokenExpired(token) {
    if (!token) return true;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
}