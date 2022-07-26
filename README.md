# Shopping Cart
![](https://github.com/Appletri/Appletri/blob/main/assets/shopping-cart.gif)
## Links
- [Try Shopping Cart here!](https://appletri.github.io/shopping-cart/)

- [Link to the Assignment](https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart)

## About
### ReactJS
<hr>
The core of this assignment is to utilize react dom router for one page apps, and the use of hooks, useState, and useEffects.

### History
Back in my undergrad years, I was the Media Coordinator for an organization known as Southwest Union Vietnamese Student Association (SWUVSA). There primary goal was to connect other individuals and teach leadership, networking, and culture. I took the position and helped move the more traditional brand to a more modern design. One of the things that I wanted to do during my time was to create a merch store. I wasn't able to bring my idea to fruition until now.

### Design
I wanted to create a website that was scalable and slick. The user experience would start with the home page where they are shown various items with some sort of interaction that would draw the user in to click them. From the home page the user can access the store or the promoted items. After clicking on an item the user would be brought to the product's page where they can select a size and quantity and add to the cart. Finally after the cart is filled with items, the user can click on the cart icon to show their checkout list, where they can remove and edit the quantity for the final price.


### Code
<hr>
#### Inventory.js
The inventory is to simulate a bunch of data that is on the backend. In there, every item has the name, uniqueID, price, image, stock quanitity of sizes, information, and tags for filtering. The script has two custom hook functions, one for searching and returning an item and one for returning the whole inventory.


#### ProductPage.js
The product page was created to scale on all items. Using useLocation, I am able to pass the item's data through the react-dom-router's Link. This data is used to fill in the products page. The products page can adapt to multiple pictures, item stock validity, and multiple information details on the item itself. After the user has selected a quantity and size, they are able to add the item to the cart.

#### NavBar.js
This piece of code sits on every page, assisting the user with links to traverse back to the home page, shop, or checkout. The NavBar uses a hook that measures the window.innerWidth to make the NavBar responsive.

```
 const [isDesktop, setDesktop] = useState(window.innerWidth > 565);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 565);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  return (
      <div>
        {isDesktop ? (
          //NavBar when screen is wider than 565px
        ) : (
          //NavBar when screen is skinnier than 565px
        )}
      </div>
  )
```

#### Checkout.js

The Checkout is just a div that hangs outside of the screen and slides in when the cart icon is clicked on. The checkout has an auto sort feature where it will combine identical items. The sort feature works by checking if the last item in the cart array is included in the rest of the array. If it is, it will add the quantity of the last item to the found item and then remove the last item from the array. It also has a quantity edit feature and a remove item feature. 

#### Shop.js

The shop page uses the custome hook UseWholeInventory to display all of the items. There are filters that can sort the shop items by their tags.

#### Home.js

The home page has two main features. The first is the intro image with a link to the shop. This picture is made to drawn in the user. The picture has a parallax effect. I am able to do this using a useState that updates the offsetY using the window scrollbar. This then translates the picture, creating a parallax effect.

```
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return(
    <div className= 'wrapper'>
      <div className='parallax' style={{ transform: `translateY(${ offsetY * 0.3}px)`}}>
        <img className = 'background' src={props.img} alt={props.info}/>
      </div>
    </div>
  );
```

The second part of the page is the featured items section. This is an area where the content creater can place promotional items. The featured items use the custom hook UseInventory to look up the item data based off the name of the product. 
