const disableScrollCheckbox = document.getElementById('check');

        disableScrollCheckbox.addEventListener('click', function () {
            if (this.checked) {
                // Disable scrolling
                document.body.style.overflow = 'hidden';
            } else {
                // Enable scrolling
                document.body.style.overflow = 'auto';
            }
        });