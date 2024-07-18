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

        // Main function to calculate the "time ago" string
        function timeAgo(dateParam) {
            if (!dateParam) return null;

            const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
            const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
            const today = new Date();
            const yesterday = new Date(today - DAY_IN_MS);

            const seconds = Math.round((today - date) / 1000);
            const minutes = Math.round(seconds / 60);
            const hours = Math.round(minutes / 60);
            const days = Math.round(hours / 24);
            const months = Math.round(days / 30);
            const years = Math.floor(days / 365);

            const isToday = today.toDateString() === date.toDateString();
            const isYesterday = yesterday.toDateString() === date.toDateString();

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
