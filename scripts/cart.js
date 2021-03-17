$(document).ready(function () {
    // let quantity = 0;
    // const storage=JSON.parse(localStorage.getItem('items'));
    // if (storage==null) {
    //     console.log('empty')
    // }else{
    //     JSON.parse(localStorage.getItem('items')).map(data=>{
    //     quantity = quantity+data.quantity;
    //     });
    // }

    // $('.iconcart p').html(quantity);
    total = 0;
    cartData = '';
    if (JSON.parse(localStorage.getItem('items')) === null) {
        cartData += '<td><h1>No items found in your cart</td>'
        cartData += '<span>description</span>'
    }
    else {
        JSON.parse(localStorage.getItem('items')).map(data => {

            cartData += '<tr><td><img src="' + data.image + '" alt="" class="img" style="width:80px; height:60px;"></td><td class="ptitle" id="' + data.id + '">' + data.title + '</td></td>';
            cartData += '<td class="price">' + data.price + '</td>'
            cartData += '<td class=""><button class="selected-item btn btn-default dropdown-toggle bg-light m-0" type="button" data-toggle="dropdown">' + data.quantity + '<span class="caret"></span></button><ul class="dropdown-menu" style="min-width: 3rem;text-align: center;z-index:9999;top: -124px;"><li class="listdata">1</li><li class="listdata">2</li><li class="listdata">3</li><li class="listdata">4</li><li class="listdata">5</li><li class="listdata">6</li><li class="listdata">7</li><li class="listdata">8</li><li class="listdata">9</li> <li class="listdata">10</li>  </ul></td>'
            //  cartData+='<td><div class="row" style="align-items:center;"> <div ><span class="quantity">'+data.quantity+'</span></div> <div class="col"><button type="button" class="fa border-0 fa-caret-up fa-lg quan_up bg-light"  aria-hidden="true" id="quan_up"> </button><br><button type="button" class="fa border-0 fa-caret-down fa-lg quan_down bg-light"  aria-hidden="true"></button><br></div></div></td>';
            cartData += '<td><span>&#8377;' + data.price * data.quantity + '</span></td></tr>'
            let da = data.price * data.quantity
            total = total + da
        });

    }

    $('.cart_body').html(cartData);
    $('#total').html(total);
    $('#total1').html(total);
    $('#total2').html(total);
    $('.total_amount').html(total + 100)
    $('.ptitle').click(function (event) {
        val = $(this).attr('id');
        console.log('clicked:' + val);
        newURl = window.location.href = 'productdetails.html?name=' + val
    });

    $('.listdata').click(function () {
        items = []
        item = {
            quantity: $(this).text(),
            title: $(this).parent().parent().parent().find('.ptitle').html(),
            id: $(this).parent().parent().parent().find('.ptitle').attr('id'),
            price: $(this).parent().parent().parent().find('.price').html(),
            image: $(this).parent().parent().parent().find('.img').attr('src')

        }
        $(this).parent().parent().find('.selected-item').html($(this).text());
        const localItems = JSON.parse(localStorage.getItem("items"));

        let selItem = localItems.find(o => o.id === item.id);
        if(selItem) {
            selItem.quantity = item.quantity
        }
        console.log('>> list', localItems);

        // localItems.map(data => {
        //     if (item.id == data.id) {
        //         data.quantity = item.quantity
        //     }
        //     else {
        //         items.push(data)
        //     }

        // })
        // items.push(item)
        localStorage.setItem('items', JSON.stringify(localItems));
        //location.reload();

    })
    $('.quan_up').click(function () {
        item = {
            title: $(this).parent().parent().parent().parent().find('.ptitle').html(),
            image: $(this).parent().parent().parent().parent().find('.img').attr('src'),
            price: $(this).parent().parent().parent().parent().find('.price').html(),
            id: $(this).parent().parent().parent().parent().find('.ptitle').attr('id'),
            quantity: $(this).parent().parent().parent().parent().find('.quantity').html(),
        }

        const localItems = JSON.parse(localStorage.getItem("items"));
        localItems.map(data => {

            if (item.id == data.id) {
                item.quantity = parseInt(data.quantity) + 1;
            }
            else {
                items.push(data);
            }
        }); items.push(item)
        localStorage.setItem('items', JSON.stringify(items));
        location.reload();
    });
    $('.quan_down').click(function () {
        item = {
            title: $(this).parent().parent().parent().parent().find('.ptitle').html(),
            image: $(this).parent().parent().parent().parent().find('.img').attr('src'),
            price: $(this).parent().parent().parent().parent().find('.price').html(),
            id: $(this).parent().parent().parent().parent().find('.ptitle').attr('id'),
            quantity: $(this).parent().parent().parent().parent().find('.quantity').html(),
        }
        if (item.quantity == 1) {
            const localItems = JSON.parse(localStorage.getItem("items"));
            localItems.map(data => {
                if (item.id == data.id) {
                    localStorage.removeItem('items')
                }
                else {
                    items.push(data)
                }

            })
            localStorage.setItem('items', JSON.stringify(items));
            location.reload();

        }
        else {
            const localItems = JSON.parse(localStorage.getItem("items"));
            localItems.map(data => {

                if (item.id == data.id) {
                    item.quantity = parseInt(data.quantity) - 1;

                }
                else {
                    items.push(data);
                }


            }); items.push(item)

            localStorage.setItem('items', JSON.stringify(items));
            location.reload();

        }
    });
    $('.place').click(function () {
        const toggle = document.querySelector(".dropdown-toggle");
        toggle.className += " hello"
        console.log('hello')
    })

})