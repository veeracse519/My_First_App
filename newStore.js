class NewAppStore{
cart_products=[]
current_user=null
current_user_id=null;
Selected_item=null;
items_data=[
    {
    "availableSizes":["S","L","XL","XXL"],
    "currencyFormat":"₹",
    "currencyId":"USD",
    "description":"14/15 s/nº",
    "id":0,"installments":9,
    "isFreeShipping":true,
    "price":845.24,
    "sku":8552515751438644,
    "style":"Branco com listras pretas",
    "title":"Cat Tee Black T-Shirt",
    "image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644_1.87b5353e.jpg"
    },
    {
    "availableSizes":["S","L","XL","XXL"],"currencyFormat":"₹","currencyId":"USD","description":"14/15 s/nº","id":1,"installments":9,"isFreeShipping":true,"price":800.24,"sku":18644119330491310,"style":"Preta com listras brancas","title":"Sphynx Tie Dye Grey T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.7faf6a31.jpg"},{"availableSizes":["XS","L"],"currencyFormat":"₹","currencyId":"USD","description":"14/15 s/nº","id":2,"installments":7,"isFreeShipping":true,"price":1147,"sku":11854078013954528,"style":"Branco com listras pretas","title":"Danger Knife Grey","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.df97d7c2.jpg"},{"availableSizes":["XXL","L"],"currencyFormat":"₹","currencyId":"USD","description":"2014 s/nº","id":3,"installments":7,"isFreeShipping":false,"price":1147,"sku":876661122392077,"style":"Preto com listras brancas","title":"White DGK Script Tee","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676_1.59b64365.jpg"},{"availableSizes":["XL"],"currencyFormat":"₹","currencyId":"USD","description":"14/15 s/nº - Jogador","id":4,"installments":12,"isFreeShipping":false,"price":1993.99,"sku":9197907543445676,"style":"Branco com listras pretas","title":"Born On The Streets","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888_1.54fbf816.jpg"},{"availableSizes":["M","L","XL"],"currencyFormat":"₹","currencyId":"USD","description":"14/15 + Camiseta 1º Mundial","id":5,"installments":9,"isFreeShipping":false,"price":845.24,"sku":10547961582846888,"style":"Preto","title":"Tso 3D Short Sleeve T-Shirt A","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891_1.45a051e0.jpg"},{"availableSizes":["XL","XXL"],"currencyFormat":"₹","currencyId":"USD","description":"Goleiro 13/14","id":6,"installments":0,"isFreeShipping":true,"price":3841.99,"sku":6090484789343891,"style":"Branco","title":"Crazy Monkey Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.d78e2790.jpg"},{"availableSizes":["S"],"currencyFormat":"₹","currencyId":"USD","description":"1977 Infantil","id":7,"installments":4,"isFreeShipping":true,"price":1732.05,"sku":18532669286405344,"style":"Preto com listras brancas","title":"Man Tie Dye Cinza Grey T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.4c799bac.jpg"},{"availableSizes":["XL"],"currencyFormat":"₹","currencyId":"USD","description":"","id":8,"installments":4,"isFreeShipping":false,"price":1439.5,"sku":5619496040738316,"style":"Azul escuro","title":"Crazy Monkey Grey","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164_1.06ec2c62.jpg"},{"availableSizes":["L","XL"],"currencyFormat":"₹","currencyId":"USD","description":"","id":9,"installments":5,"isFreeShipping":true,"price":1038.6,"sku":11600983276356164,"style":"","title":"Tso 3D Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.4c799bac.jpg"},{"availableSizes":["L","XL"],"currencyFormat":"₹","currencyId":"USD","description":"","id":10,"installments":9,"isFreeShipping":true,"price":3772,"sku":27250082398145996,"style":"","title":"On The Streets Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316_1.843a4713.jpg"},{"availableSizes":["M","L"],"currencyFormat":"₹","currencyId":"USD","description":"","id":11,"installments":3,"isFreeShipping":true,"price":1019.98,"sku":39876704341265610,"style":"Wine","title":"Wine Skul T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610_1.a313534c.jpg"},{"availableSizes":["S","XS"],"currencyFormat":"₹","currencyId":"USD","description":"4 MSL","id":12,"installments":9,"isFreeShipping":true,"price":845.24,"sku":12064273040195392,"style":"Black with custom print","title":"Cat Tee Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"},{"availableSizes":["M"],"currencyFormat":"₹","currencyId":"USD","description":"","id":13,"installments":5,"isFreeShipping":true,"price":2267.06,"sku":51498472915966370,"style":"Front print and paisley print","title":"Dark Thug Blue-Navy T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg"},{"availableSizes":["M","L","XL"],"currencyFormat":"₹","currencyId":"USD","description":"GPX Poly 1","id":14,"installments":3,"isFreeShipping":true,"price":692.82,"sku":10686354557628304,"style":"Front tie dye print","title":"Sphynx Tie Dye Wine T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg"},{"availableSizes":["M","L","XL","XXL"],"currencyFormat":"₹","currencyId":"USD","description":"Treino 2014","id":15,"installments":5,"isFreeShipping":true,"price":1077.72,"sku":11033926921508488,"style":"Black T-Shirt with front print","title":"Skuul","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.84c82a5a.jpg"}]
users_data=[];
status=false;
status1=false;
user_entry_status=false;
user_profile=null;
remain_data=[]
network_status=null
get_data=async()=>{
    try{
        const res=await fetch("https://5fca0d103c1c2200164419d0.mockapi.io/products/items")
        this.network_status=res.status
        const data=await res.json()
        this.users_data=data
        this.network_status=false
    }
    catch(e){
        this.network_status=true
    }
    
}
hitSignIn=async(u_data)=>{
    // if(123==u_data.user_name && 123==u_data.password){
    //     this.network_status=false
    //     this.status=true;
        // this.user_profile=user;
        // this.current_user={First_Name:"veera",Last_Name:"Kandula",Email:"123@gmail.com",Password:"123",User_Name:"123",Gender:"Male",id:21};
        // this.current_user_id=user.id;
        // this.cart_products=user.Cart_Details.Cart_List;
    //     this.cart_products=[]
    //     return
    // }
    await this.get_data()
    if(!this.network_status){
    let user_history=this.users_data
    user_history.forEach(user=>{
        if(user.User_Name===u_data.user_name && user.Password===u_data.password)
        {
            this.network_status=false
              this.status=true;
              this.user_profile=user;
              this.current_user=user;
              this.current_user_id=user.id;
              this.cart_products=user.Cart_Details.Cart_List;
        }
    })
    }
}

hitSignUp=async(u_data)=>{
    await this.get_data()
    let user_history=this.users_data
     user_history.forEach(user=>{
        if(user.Email===u_data.Email)
        {
              this.user_entry_status=true
             
        }
    })
    if(this.user_entry_status===false){
        const headers=new Headers();
        headers.append("Content-type","Application/json");
        const options={
            method:"POST",
            headers,
            body:JSON.stringify(u_data)
        }
        const request=new Request("https://5fca0d103c1c2200164419d0.mockapi.io/products/items",options);
        const response=await fetch(request);
                return response.status
    }
    else{
        this.user_entry_status=false
        alert("User Details Already Exist !!")
    }
    
}

cart_updation=async(id,data)=>{
    const headers=new Headers();
    headers.append("Content-type","Application/json");
    const options={
        method:"PUT",
        headers,
        body:JSON.stringify(data)
    }
    const request=new Request("https://5fca0d103c1c2200164419d0.mockapi.io/products/items/"+id,options);
    const response=await fetch(request)
    
    
}




inc_Dec=(data)=>{
    if(data.length!==0){
        let Items_List=data
   return Items_List.sort(function(a,b){
        return a.price - b.price
    })
    }
    else{
        let Items_List=[]
        return Items_List
    }
   
}
dec_Inc=(data)=>{
    if(data.length!==0){
    let Items_List=data
    return Items_List.sort(function(a,b){
        return b.price - a.price
    })
    }
    else{
        let Items_List=[]
        return Items_List;
    }
}
search=(text)=>{
  let Items_List=this.items_data
  return Items_List.filter(item=>item.title.toLowerCase().search(text.toLowerCase())!==-1)
}
products_In_Cart=async(id_of_item)=>{
let Cart_Items=this.cart_products
let all_Items=this.items_data;
//    let Cart_Items=this.cart_products;
//    let all_Items=this.items_data;
   for(let i=0;i<all_Items.length;i++)
   {
       let status=false;
       for(let j=0;j<Cart_Items.length;j++)
       {
        
           if(Cart_Items[j].id===id_of_item)
           {
                 Cart_Items[j].quantity+=1;
                 Cart_Items[j].total_price=parseFloat(Cart_Items[j].quantity*all_Items[i].price).toFixed(2)
                this.current_user.Cart_Details.Cart_List=Cart_Items
                let data={Cart_Details:{No_Of_Cart_Items:Cart_Items.length,Cart_List:Cart_Items}}
            //    alert(data.First_Name)
              await this.cart_updation(this.current_user_id,data)
                 
                 status=true

                 break
           }
       }
       if(status){
           break
       }
       else if(all_Items[i].id===id_of_item)
       {
           let item=all_Items[i]
           item['quantity']=1
           item['total_price']=parseFloat(item.price)
           item['price']=item.price
           Cart_Items.push(item)
            this.cart_products=Cart_Items
            let data={Cart_Details:{No_Of_Cart_Items:Cart_Items.length,Cart_List:Cart_Items}}
        
      await this.cart_updation(this.current_user_id,data)
      this.cart_products=this.current_user.Cart_Details.Cart_List
           break
       }
   }
   
}
remove_item=async(item_id)=>{
let Cart_Items=this.cart_products;
Cart_Items.forEach(async item=>{
    if(item.id===item_id){
        let index=Cart_Items.indexOf(item)
        Cart_Items.splice(index,1)
        let data={Cart_Details:{No_Of_Cart_Items:Cart_Items.length,Cart_List:Cart_Items}}
       await this.cart_updation(this.current_user_id,data)
       this.cart_products=this.current_user.Cart_Details.Cart_List

    }
})
// this.cart_products=Cart_Items
// return Cart_Items
}
inc_quantity=async (item_id)=>{
let Cart_Items=this.cart_products;
Cart_Items.forEach(item=>{
    if(item.id===item_id){
        item.quantity+=1;
        item.total_price=parseFloat(item.quantity*item.price).toFixed(2)
    }
})
let data={Cart_Details:{No_Of_Cart_Items:Cart_Items.length,Cart_List:Cart_Items}}
await this.cart_updation(this.current_user_id,data)
this.cart_products=this.current_user.Cart_Details.Cart_List
// this.cart_products=Cart_Items
}
selected_item=(item_id)=>{
let all_Items=this.items_data
this.remain_data=[]
let remaining_data=this.remain_data
for(let i=0;i<all_Items.length;i++){
    if(all_Items[i].id==item_id){
this.Selected_item=all_Items[i]
    }
    else{
        remaining_data.push(all_Items[i])
    }
}
this.remain_data=remaining_data
}
dec_quantity=async(item_id)=>{
    let Cart_Items=this.cart_products;
    Cart_Items.forEach(item=>{
        if(item.id===item_id  && item.quantity>1){
            item.quantity-=1;
            item.total_price=parseFloat(item.quantity*item.price).toFixed(2)
        }
    })
    
let data={Cart_Details:{No_Of_Cart_Items:Cart_Items.length,Cart_List:Cart_Items}}
await this.cart_updation(this.current_user_id,data)
this.cart_products=this.current_user.Cart_Details.Cart_List
// this.cart_products=Cart_Items
    }
hitLogout=async()=>{
    await this.get_data()
    if(!this.network_status){
    this.network_status=false
    this.status=false;
    this.current_user=null
    this.current_user_id=null;
    this.cart_products=[]
    }
    
}
}
const newAppStore=new NewAppStore();
export default newAppStore