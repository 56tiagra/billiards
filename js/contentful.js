const client = contentful.createClient({
    space: 'tetf1waw6adr',
    accessToken: 'PrsEyESxzL8l0LrAumYCzG5YjUEQg4fuCIJkO-SHU6w'
  })
  
  client.getEntries({
    content_type: 'product'
  })
    .then(result => {
      console.log(result)
      //loop the result and render to the html
      result.items.map((item) => {
        renderContentToHtml(item.fields)
      })
      carouselInit()
    })
    .catch(e => {
      console.log(e)
      carouselInit()
    })
  
  function renderContentToHtml(content) {
    //build html
    let template = `
        <div class="col-lg-3 col-md-6">
            <div class="single-product">
                <img class="img-fluid" src="${content.photo[0].fields.file.url}" alt="">
                <div class="product-details">
                    <h6>${content.name}</h6>
                    <div class="price">
                        <h6>$${content.discountPrice ?? content.price}</h6>
                        ${ content.discountPrice ? `<h6 class="l-through">$${content.price}</h6>` : ''}
                    </div>
                    <div class="prd-bottom">

                        <a href="" class="social-info">
                            <span class="ti-bag"></span>
                            <p class="hover-text">add to bag</p>
                        </a>
                        <a href="" class="social-info">
                            <span class="lnr lnr-heart"></span>
                            <p class="hover-text">Wishlist</p>
                        </a>
                        <a href="" class="social-info">
                            <span class="lnr lnr-sync"></span>
                            <p class="hover-text">compare</p>
                        </a>
                        <a href="" class="social-info">
                            <span class="lnr lnr-move"></span>
                            <p class="hover-text">view more</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    `
    document.getElementById('latest-products-list').insertAdjacentHTML('beforeend',template)
  }

  function carouselInit() {

    var carousel = function() {
        $(".active-product-area").owlCarousel({
            items:1,
            autoplay:false,
            autoplayTimeout: 5000,
            loop:true,
            nav:true,
            navText:["<img src='img/product/prev.png'>","<img src='img/product/next.png'>"],
            dots:false
        });
	};
	carousel();
  }