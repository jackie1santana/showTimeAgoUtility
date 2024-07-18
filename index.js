// Utility function to format time in human-readable "time ago" format.
function showtimeago(dateParam) {
    try {
        const MONTH_NAMES = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        // Helper function to get the ordinal suffix of a number
        function getOrdinalNum(n) {
            return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
        }

        // Helper function to format the date
        function getFormattedDate(date, preformattedDate, hideYear) {
            const day = date.getDate();
            const month = MONTH_NAMES[date.getMonth()];
            const year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'pm' : 'am';

            hours = hours % 12 || 12; // Convert hours to 12-hour format
            minutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero to minutes

            if (preformattedDate) {
                return `${preformattedDate} at ${hours}:${minutes} ${ampm}`;
            }

            if (hideYear) {
                return `${month} ${getOrdinalNum(day)}, at ${hours}:${minutes} ${ampm}`;
            }

            return `${month} ${getOrdinalNum(day)}, ${year} at ${hours}:${minutes} ${ampm}`;
        }

        // Validate the date parameter
        function validateDateParam(dateParam) {
            if (dateParam === undefined || dateParam === null) {
                throw new Error("Invalid date parameter: dateParam cannot be empty. It must be a valid ISO date string or a Date object.");
            }
            if (typeof dateParam === 'string') {
                const date = new Date(dateParam);
                if (isNaN(date.getTime())) {
                    throw new Error("Invalid date parameter: dateParam is not a valid ISO date string.");
                }
                return date;
            }
            if (typeof dateParam === 'object' && dateParam instanceof Date) {
                return dateParam;
            }
            throw new Error("Invalid date parameter: dateParam must be a valid ISO date string or a Date object.");
        }

        // Main function to calculate the "time ago" string
        function timeAgo(dateParam) {
            const date = validateDateParam(dateParam);
            const now = new Date();
            const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
            const YEAR_IN_MS = 365.25 * DAY_IN_MS; // Account for leap years
            const yesterday = new Date(now - DAY_IN_MS);

            const seconds = Math.round((now - date) / 1000);
            const minutes = Math.round(seconds / 60);
            const hours = Math.round(minutes / 60);
            const days = Math.round(hours / 24);
            const months = Math.round(days / 30.44); // More accurate month calculation
            const years = Math.floor(days / 365.25); // More accurate year calculation

            const isToday = now.toDateString() === date.toDateString();
            const isYesterday = yesterday.toDateString() === date.toDateString();

            // Specific check for exactly one year ago
            const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
            if (date.toDateString() === oneYearAgo.toDateString()) {
                return '1 year ago';
            }

            switch (true) {
                case (seconds < 5):
                    return 'now';
                case (seconds < 60):
                    return `${seconds} seconds ago`;
                case (seconds < 90):
                    return 'about a minute ago';
                case (minutes < 60):
                    return `${minutes} minutes ago`;
                case (hours === 1):
                    return '1 hour ago';
                case (hours < 24):
                    return `${hours} hours ago`;
                case (isToday):
                    return getFormattedDate(date, 'Today');
                case (isYesterday):
                    return getFormattedDate(date, 'Yesterday');
                case (days < 30):
                    return `${days} days ago`;
                case (months === 1):
                    return '1 month ago';
                case (months < 12):
                    return `${months} months ago`;
                case (years === 1):
                    return '1 year ago';
                case (years > 1):
                    return `${years} years ago`;
                default:
                    return getFormattedDate(date);
            }
        }

        return timeAgo(dateParam);

    } catch (error) {
        console.error("Error in showtimeago function:", error);
        throw new Error(error.message);
    }
}

module.exports = showtimeago;
