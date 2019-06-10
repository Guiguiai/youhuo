function Car() { };
//加入购物车
Car.prototype.addCar = function (goods) {
    //1取出商品
    var cartlist = this.getCar();
    //2.判断是否有相同的商品，有则直接累加数量，否则直接加入
    if (this.hasGoods(goods.id) && this.hasGoods(goods.content)) {
        
        //有则加数量
        for (var i = 0; i < cartlist.length; i++) {
            if (cartlist[i].id === goods.id && cartlist[i].content === goods.content) {
                cartlist[i].number += parseInt(goods.number); //商品在原来的数量上进行累加
                break; //跳出for循环
            }
        }
    } else {
        //没有直接加入
        cartlist.push(goods);
    }
    //3、把商品重新存储到本地存储
    localStorage.setItem('cartlist', JSON.stringify(cartlist));
}

//判断是否有相同商品
Car.prototype.hasGoods = function (n) {
    //获取本地存储的商品数据，进行判断是否有相同商品，有返回true,否则返回false
    var cartlist = this.getCar();
    for (var i = 0; i < cartlist.length; i++) {
        if (cartlist[i].id === n || cartlist[i].content === n) {
            return true;
        }
    }
    return false;
}
//获取购物车所有的商品
Car.prototype.getCar = function () {
    //因为可能没有数据，所以默认设置为一个空数组
    var cartlist = JSON.parse(localStorage.getItem('cartlist')) || [];
    return cartlist;
}


//获取购物车商品的总价
Car.prototype.getTotalPrice = function () {

    var cartlist = this.getCar();
    var totalPrice = 0.00;
    var totalNumber = 0;
    for (var i = 0; i < cartlist.length; i++) {
        totalPrice += cartlist[i].price * cartlist[i].number;
        totalNumber += parseInt(cartlist[i].number);
    }
    return { "totalNumber": totalNumber, "totalPrice": totalPrice.toFixed(2) };

}



//删除购物车商品
Car.prototype.delGoods = function (id) {
    var cartlist = this.getCar();
    for (var i = 0; i < cartlist.length; i++) {
        if (cartlist[i].id == id) {
            //删除指定的商品
            cartlist.splice(i, 1);
            break;
        }
    }
    //再把商品写入到本地存储
    localStorage.setItem('cartlist', JSON.stringify(cartlist));
    location.reload();

}




