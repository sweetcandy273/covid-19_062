$(function() {
    const themeOptions = $('#theme-options');
    const body = $('body');
    const themeSwitcherButton = $('#theme-switcher-button'); // Button that shows current theme/title

    const themes = ['dark', 'light', 'purple', 'pink']; // Available themes

    // Function to apply the saved theme on page load
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark if nothing saved
        setTheme(savedTheme);
    }

    // Function to set a theme
    function setTheme(themeName) {
        // Remove any existing theme classes
        themes.forEach(theme => {
            body.removeClass(theme + '-theme');
        });

        // Add the new theme class if it's not the default dark theme
        if (themeName !== 'dark') {
            body.addClass(themeName + '-theme');
        }
        
        localStorage.setItem('theme', themeName);

        // Update dropdown button text to reflect the active theme
        // Capitalize first letter for display
        const displayName = themeName.charAt(0).toUpperCase() + themeName.slice(1);
        themeSwitcherButton.text(displayName + ' Theme');
    }

    // Apply theme on initial load
    applySavedTheme();

    // Event listener for dropdown items
    themeOptions.on('click', '.dropdown-item', function(e) {
        e.preventDefault(); // Prevent default link behavior
        const selectedTheme = $(this).data('theme');
        setTheme(selectedTheme);
    });
});
