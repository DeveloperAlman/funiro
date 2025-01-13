// INSTALL LOCOMOTIVE SCROLL
let locoScroll;
locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    inertia: 0.8,
    getDirection: true
});

new ResizeObserver(() => locoScroll.update()).observe(
    document.querySelector("[data-scroll-container]")
);

// SHUT DOWN WARNING JQUERY PASSIVE LISTENERS
jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, {
            passive: !ns.includes("noPreventDefault")
        });
    }
};
jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchmove", handle, {
            passive: !ns.includes("noPreventDefault")
        });
    }
};
jQuery.event.special.wheel = {
    setup: function (_, ns, handle) {
        this.addEventListener("wheel", handle, {
            passive: true
        });
    }
};
jQuery.event.special.mousewheel = {
    setup: function (_, ns, handle) {
        this.addEventListener("mousewheel", handle, {
            passive: true
        });
    }
};

/* LOCOMOTIVE ALL ANCHOR SMOOTH SCROLLING */
const anchorLinks = document.querySelectorAll('a[href^=\\#]:not([href$=\\#])');

anchorLinks.forEach((anchorLink) => {
    let hashval = anchorLink.getAttribute('href');
    let target = document.querySelector(hashval);

    anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        locoScroll.scrollTo(target);
    });
});

// SLIDERS
$(function () {
    $('.slider-main__body').slick({
        dots: true,
        swipe: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        lazyLoad: 'ondemand',
        speed: 700,
        prevArrow: '<button class="slider-arrow slider-arrow--prev icon-arrow-down"></button>',
        nextArrow: '<button class="slider-arrow slider-arrow--next icon-arrow-down"></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    swipe: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    arrows: true
                }
            },
            {
                breakpoint: 865,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    arrows: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    swipe: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    arrows: false
                }
            },
            {
                breakpoint: 651,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    lazyLoad: 'ondemand'
                }
            },
            {
                breakpoint: 481,
                settings: {
                    swipe: true,
                    lazyLoad: 'ondemand',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            }
        ]
    });
});

$(function () {
    $('.tips-slider').slick({
        swipe: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        lazyLoad: 'ondemand',
        speed: 700,
        prevArrow: '<button class="tips-arrow tips-arrow--prev icon-arrow-down"></button>',
        nextArrow: '<button class="tips-arrow tips-arrow--next icon-arrow-down"></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    swipe: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    swipe: false,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    arrows: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    swipe: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    arrows: false
                }
            },
            {
                breakpoint: 651,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    lazyLoad: 'ondemand'
                }
            },
            {
                breakpoint: 481,
                settings: {
                    swipe: true,
                    lazyLoad: 'ondemand',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            }
        ]
    });
});

$(function () {
    $('.explore__slider').slick({
        swipe: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        lazyLoad: 'ondemand',
        speed: 700,
        prevArrow: '<button class="explore-arrow explore-arrow--prev icon-arrow-down"></button>',
        nextArrow: '<button class="explore-arrow explore-arrow--next icon-arrow-down"></button>',
        responsive: [{
                breakpoint: 1025,
                settings: {
                    swipe: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    arrows: true
                }
            },
            {
                breakpoint: 865,
                settings: {
                    swipe: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    arrows: false
                }
            },
            {
                breakpoint: 651,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    lazyLoad: 'ondemand'
                }
            },
            {
                breakpoint: 481,
                settings: {
                    swipe: true,
                    lazyLoad: 'ondemand',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            }
        ]
    });
});

// Set current year in copyright
const year = document.querySelector(".current-year");
const copyYear = document.querySelector(".copyright-year");

const currentYear = new Date().getFullYear();
year.textContent = currentYear;
copyYear.textContent = currentYear;

// Smooth scrolling on empty # href
const allLinks = document.querySelectorAll("a[href^='#']");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href == "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                bottom: 0,
                behavior: "smooth"
            });
        }

        // Close mobile naviagtion
        if (link.classList.contains("header__nav-link"))
            mobileNav.classList.toggle("mobile-open"),
            menu.classList.toggle("open"),
            html.classList.toggle("html-overflow");
    });

});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

const formSearch = document.querySelector(".header__search-btn");
const form = document.querySelector(".header__search-input");

formSearch.addEventListener("click", Change);

function Change() {
    form.classList.toggle("open");
}

const nav = document.querySelector(".header");
const headerInput = document.querySelector(".header__search-input");
const iconSearch = document.querySelector(".icon-search");
const btnSearch = document.querySelector(".header__search-btn");
// Animation on scroll
locoScroll.on('scroll', (instance) => {
    if (instance.scroll.y > 10) {
        nav.style.backgroundColor = 'rgba(255,255,255,0.85)',
            nav.style.boxShadow = '0 1rem 3rem rgba(0,0,0,0.05)',
            headerInput.style.backgroundColor = 'rgb(255, 137, 123)',
            headerInput.style.color = 'white',
            iconSearch.style.color = 'white',
            btnSearch.style.backgroundColor = 'rgb(255, 137, 123)';
    } else {
        nav.style.backgroundColor = 'rgba(0,0,0,0)',
            nav.style.boxShadow = '0 1rem 3rem rgba(0,0,0,0)',
            headerInput.style.backgroundColor = '#FFF',
            headerInput.style.color = '#333',
            iconSearch.style.color = '#333',
            btnSearch.style.backgroundColor = '#FFF';
    }
})
// window.onscroll = () => {

//     if (this.scrollY <= 10)
//         nav.style.backgroundColor = 'rgba(0,0,0,0)',
//         nav.style.boxShadow = '0 1rem 3rem rgba(0,0,0,0)',
//         nav.style.padding = '1rem 2.5rem 0 2.5rem',
//         headerInput.style.backgroundColor = '#FFF',
//         headerInput.style.color = '#333',
//         iconSearch.style.color = '#333',
//         btnSearch.style.backgroundColor = '#FFF';
//     else
//         nav.style.backgroundColor = 'rgba(255,255,255,0.85)',
//         nav.style.boxShadow = '0 1rem 3rem rgba(0,0,0,0.05)',
//         nav.style.padding = '0 2.5rem 0 2.5rem',
//         headerInput.style.backgroundColor = 'rgb(255, 137, 123)',
//         headerInput.style.color = 'white',
//         iconSearch.style.color = 'white',
//         btnSearch.style.backgroundColor = 'rgb(255, 137, 123)';
// }

window.onload = function () {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
        const targetElement = e.target;

        if (targetElement.classList.contains('products__more')) {
            getProducts(targetElement);
            e.preventDefault();
        }
        if (targetElement.classList.contains('item-product__basket-svg') || targetElement.classList.contains('item-product__basket') || targetElement.classList.contains('actions-product__btn')) {
            const productId = targetElement.closest('.product__wrapper').dataset.pid;
            addToCart(targetElement, productId);
            e.preventDefault();
        }
        e.preventDefault();
        if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')) {
            if (document.querySelector('.cart-list').children.length > 0) {
                document.querySelector('.cart-header').classList.toggle('_active');
            }
            e.preventDefault();
        } else if (!targetElement.closest('.cart-header') && !targetElement.classList.contains('item-product__basket') && !targetElement.classList.contains('actions-product__btn') && !targetElement.classList.contains('item-product__basket-svg')) {
            document.querySelector('.cart-header').classList.remove('_active');
        }
        e.preventDefault();

        if (targetElement.classList.contains('cart-list__delete')) {
            const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
            updateCart(targetElement, productId, false);
            e.preventDefault();
        }
        e.preventDefault();
    }

    // Load More Products
    async function getProducts(button) {
        if (!button.classList.contains('_hold')) {
            button.classList.add('_hold');
            const file = "js/products.json";
            let response = await fetch(file, {
                method: "GET"
            });
            if (response.ok) {
                let result = await response.json();
                loadProducts(result);
                button.classList.remove('_hold');
                button.remove();
            } else {
                alert("Ошибка");
            }
        }
    }

    function loadProducts(data) {
        const productsItems = document.querySelector('.products__items');
        data.products.forEach(item => {
            const productId = item.id;
            const productUrl = item.url;
            const productImage = item.image;
            const productTitle = item.title;
            const productText = item.text;
            const productPrice = item.price;
            const productOldPrice = item.priceOld;
            const productShareUrl = item.shareUrl;
            const productLikeUrl = item.likeUrl;
            let productTemplateStart = `<div data-pid="${productId}" class="product__wrapper"><a href="" class="product__hover"><div class="products__item item-product">`;
            let productTemplateEnd = `</div>`;

            let productTemplateImage = `
		<div href="${productUrl}" class="item-product__img">
			<img src="img/products/${productImage}" alt="${productTitle}">
		</div>
	`;

            let productTemplateBodyStart = `<div class="item-product__body">`;
            let productTemplateBodyEnd = `</a></div>`;


            let productTemplateContent = `
		<div class="item-product__content">
			<h5 class="item-product__heading">${productTitle}</h5>
			<p class="item-product__text">${productText}</p>
            <p class="item-product__price"><del>Rp ${productPrice}</del></p>
            <p class="item-product__price price--old item-product__price_old">Rp ${productOldPrice}</p>
		</div>
        <a href="" class="item-product__basket">
        <svg class="item-product__basket-svg" width="24" height="24" stroke-width="2" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path class="item-product__basket-svg" d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class="item-product__basket-svg" d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path class="item-product__basket-svg" d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </a>
        
	`;


            let productTemplateActions = `
		<div class="item-product__actions actions-product">
			<div class="actions-product__body">
                <a href="" class="actions-product__btn">Add to cart</a>
                    <div class="actions-product__wrapper">
				        <a href="${productShareUrl}" class="actions-product__share"><i class="icon-share"></i>Share</a>
				        <a href="${productLikeUrl}" class="actions-product__like"><i class="icon-favorite"></i>Like</a>
                    </div>
			</div>
		</div>
	`;

            let productTemplateBody = '';
            productTemplateBody += productTemplateBodyStart;
            productTemplateBody += productTemplateContent;
            productTemplateBody += productTemplateActions;
            productTemplateBody += productTemplateBodyEnd;

            let productTemplate = '';
            productTemplate += productTemplateStart;
            productTemplate += productTemplateImage;
            productTemplate += productTemplateBody;
            productTemplate += productTemplateEnd;

            productsItems.insertAdjacentHTML('beforeend', productTemplate);
        });
    }
    // AddToCart
    function addToCart(productButton, productId) {
        if (!productButton.classList.contains('_hold')) {
            productButton.classList.add('_hold');
            productButton.classList.add('_fly');

            const cart = document.querySelector('.cart-header__icon');
            const product = document.querySelector(`[data-pid="${productId}"]`);
            const productImage = product.querySelector('.item-product__img');

            const productImageFly = productImage.cloneNode(true);

            const productImageFlyWidth = productImage.offsetWidth;
            const productImageFlyHeight = productImage.offsetHeight;
            const productImageFlyTop = productImage.getBoundingClientRect().top;
            const productImageFlyLeft = productImage.getBoundingClientRect().left;

            productImageFly.setAttribute('class', '_flyImage');
            productImageFly.style.cssText =
                `
                left: ${productImageFlyLeft}px;
                top: ${productImageFlyTop}px;
                width: ${productImageFlyWidth}px;
                height: ${productImageFlyHeight}px;
                `;

            document.body.append(productImageFly);

            const cartFlyLeft = cart.getBoundingClientRect().left;
            const cartFlyTop = cart.getBoundingClientRect().top;

            productImageFly.style.cssText =
                `
            left: ${cartFlyLeft}px;
            top: ${cartFlyTop}px;
            width: 0;
            height: 0;
            transform: scale(0);
            opacity: 0;
            `;

            productImageFly.addEventListener('transitionend', function () {
                if (productButton.classList.contains('_fly')) {
                    productImageFly.remove();
                    updateCart(productButton, productId);
                    productButton.classList.remove('_fly');
                }
            });
        }
    }

    function updateCart(productButton, productId, productAdd = true) {
        const cart = document.querySelector('.cart-header');
        const cartIcon = cart.querySelector('.cart-header__icon');
        const cartQuantity = cartIcon.querySelector('span');
        const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
        const cartList = document.querySelector('.cart-list');
        //Добавляем
        if (productAdd) {
            if (cartQuantity) {
                cartQuantity.innerHTML = ++cartQuantity.innerHTML;
            } else {
                cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
            }
            if (!cartProduct) {
                const product = document.querySelector(`[data-pid="${productId}"]`);
                const cartProductImage = product.querySelector('.item-product__img').innerHTML;
                const cartProductTitle = product.querySelector('.item-product__heading').innerHTML;
                const cartProductContent = `
                        <a href="" class="cart-list__img">${cartProductImage}</a>
                        <div class="cart-list__body">
                            <a href="" class ="cart-list__heading">${cartProductTitle}</a> 
                            <div class="cart-list__quantity">Quantity: <span>1</span></div>
                            <a href="" class="cart-list__delete wrapper-link"><div class="wrapper-gif cart-list__delete"><div class="trash-box cart-list__delete">
                            <div class="trash cart-list__delete"></div>
                            <div class="trash-top cart-list__delete"></div>
                            <div class="trash-btm cart-list__delete">
                              <div class="trash-lines cart-list__delete">
                                <div class="trash-line cart-list__delete"></div>
                                <div class="trash-line cart-list__delete"></div>
                              </div>
                            </div>
                          </div></div></a>
                        </div> `;
                cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`);
            } else {
                const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
                cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
            }

            productButton.classList.remove('_hold');
        } else {
            const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
            cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
            if (!parseInt(cartProductQuantity.innerHTML)) {
                cartProduct.remove();
            }

            const cartQuantityValue = --cartQuantity.innerHTML;

            if (cartQuantityValue) {
                cartQuantity.innerHTML = cartQuantityValue;
            } else {
                cartQuantity.remove();
                cart.classList.remove("_active");
            }
        }
    }

    //Furniture Gallery
    const furniture = document.querySelector('.gallery__body');
    if (furniture) {
        const furnitureItems = document.querySelector('.gallery__items');
        const furnitureColumn = document.querySelectorAll('.gallery__column');
        // Скорость анимации
        const speed = furniture.dataset.speed;
        // Объявление переменных
        let positionX = 0;
        let coordXprocent = 0;

        function setMouseGalleryStyle() {
            let furnitureItemsWidth = 0;
            furnitureColumn.forEach(element => {
                furnitureItemsWidth += element.offsetWidth;
            });
            const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
            const distX = Math.floor(coordXprocent - positionX);
            positionX = positionX + (distX * speed);
            let position = furnitureDifferent / 200 * positionX;
            furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0);`;

            if (Math.abs(distX) > 0) {
                requestAnimationFrame(setMouseGalleryStyle);
            } else {
                furniture.classList.remove('_init');
            }
        }
        furniture.addEventListener("mousemove", function (e) {
            // Получение ширины
            const furnitureWidth = furniture.offsetWidth;
            // Ноль по середине
            const coordX = e.pageX - furnitureWidth / 2;
            // Получаем проценты
            coordXprocent = coordX / furnitureWidth * 200;

            if (!furniture.classList.contains('_init')) {
                requestAnimationFrame(setMouseGalleryStyle);
                furniture.classList.add('_init');
            }
        });
    }
}