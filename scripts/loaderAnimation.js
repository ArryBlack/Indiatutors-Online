window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const breadcrumb=document.querySelector('.breadcrumbs')

    // Hide the loader
    loader.style.display = 'none';
    // Show the content sections
    header.style.display = 'block';
    main.style.display = 'block';
    footer.style.display = 'block';
    breadcrumb.style.display='block';


});