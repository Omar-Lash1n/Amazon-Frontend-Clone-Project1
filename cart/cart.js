   // Tab switching functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs and contents
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Checkout button functionality
        document.getElementById('checkout-btn').addEventListener('click', function() {
            document.getElementById('main-tabs').style.display = 'none';
            document.getElementById('checkout-page').style.display = 'block';
        });

        // Back to cart functionality
        document.getElementById('back-to-cart').addEventListener('click', function() {
            document.getElementById('checkout-page').style.display = 'none';
            document.getElementById('main-tabs').style.display = 'block';
        });

        // Delete item functionality
        document.querySelectorAll('.delete-item').forEach(button => {
            button.addEventListener('click', function() {
                const item = this.closest('.cart-item');
                item.style.opacity = '0';
                setTimeout(() => {
                    item.remove();
                    updateCartCount();
                }, 300);
            });
        });

        // Save for later functionality
        document.querySelectorAll('.save-later').forEach(button => {
            button.addEventListener('click', function() {
                alert('Item saved for later!');
            });
        });

        // Update cart count
        function updateCartCount() {
            const cartCount = document.querySelectorAll('.cart-item').length;
            document.querySelector('.tab[data-tab="cart"]').textContent = `Shopping Cart (${cartCount})`;
            document.querySelector('.cart-link').innerHTML = `<i class="fas fa-shopping-cart"></i> Cart (${cartCount})`;
        }

        // Form submission
        document.querySelector('.checkout-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Order placed successfully! Thank you for your purchase.');
            // In a real application, you would process the order here
        });