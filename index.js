const core = require('@actions/core');
const github = require('@actions/github');

try {
    function showtimeago(date) {
        const MONTH_NAMES = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        function getOrdinalNum() {
            return (
                n +
                (n > 0 ? ['th', 'st', 'nd', 'rd'][
                        (n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10
                    ] :
                    '')
            );
        }

        function getFormattedDate(
            date,
            preformattedDate,
            hideYear
        ) {
            const day = date.getDate();
            const month = MONTH_NAMES[date.getMonth()];
            const year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let ampm = hours >= 12 ? 'pm' : 'am';

            switch (true) {
                case (hours > 12):
                    hours -= 12;
                case (hours === 0):
                    hours = 12;
                case (minutes < 10):
                    minutes = `${minutes}`;
                case (preformattedDate):
                    // Today at 10:20am
                    // Yesterday at 10:20am
                    return `${ preformattedDate } at ${ hours }:${ minutes } ${ampm}`;
                case (hideYear):
                    // January 10th at 10:20pm
                    return `${month} ${getOrdinalNum(
                        day
                    )}, at ${hours}:${minutes} ${ampm}`;
                default:
                    // January 10th 2022 at 10:20pm
                    return `${month} ${getOrdinalNum(
                        day
                    )}, ${year} at ${hours}:${minutes} ${ampm}`;
            }

        }


        function timeAgo(dateParam) {
            if (!dateParam) {
                return null;
            }

            const date =
                typeof dateParam === 'object' ? dateParam : new Date(dateParam);
            const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
            const today = new Date();

            const yesterday = new Date(today - DAY_IN_MS);

            const seconds = Math.round((today - date) / 1000);
            const minutes = Math.round(seconds / 60);
            const hour = Math.round(seconds / 3600);
            const day = Math.round(seconds / 86400);
            const month = Math.round(seconds / 2629800);
            const year = Math.floor(seconds / 31536000);
            const isToday = today.toDateString() === date.toDateString();
            const isYesterday = yesterday.toDateString() === date.toDateString();
            const isThisYear = today.getFullYear() === date.getFullYear();

            switch (true) {
                case (seconds < 5):
                    return 'now';
                case (seconds < 60):
                    return `${seconds} seconds ago`;
                case (seconds < 90):
                    return 'about a minute ago';
                case (minutes < 60):
                    return `${minutes} minutes ago`;
                case (hour === 1 && hour < 2):
                    return `${hour} hour ago`; // 1 hour ago
                case (hour > 1 && hour <= 12):
                    return `${hour} hours ago`; // 2 hours ago
                case (isToday):
                    return getFormattedDate(date, 'Today'); // Today at 10:20am
                case (isYesterday):
                    return getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20am
                case (day > 1 && day <= 30):
                    return `${day} days ago`; // 2 days ago
                case (isThisYear):
                    return getFormattedDate(date, false, true); // January 10th at 10:20pm 
                case (day > 30 && month <= 1):
                    return `${hour} month ago`; // 1 month ago
                case (month > 1 && month <= 12):
                    return `${month} months ago`; // 2 months ago
                case (year === 1):
                    return `${year} year ago`; // 1 year ago
                case (year > 1):
                    return `${year} years ago`; // 2 years ago
                default:
                    return getFormattedDate(date); // January 10th 2022 at 10:20pm
            }
        }

        return timeAgo(date);
    }

} catch (error) {
    core.setFailed(error.message);
}

module.exports = showtimeago;