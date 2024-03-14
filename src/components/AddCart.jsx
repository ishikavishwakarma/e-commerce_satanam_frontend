import React, { useState } from 'react'
import Navbar from './Nav';

const AddCart = () => {
  const cart = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '/product',
      special:"Denim Dhoop",
      price: '$48',
      imageSrc: 'https://www.pujagoodies.com/wp-content/uploads/2023/09/444-jpg.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      special:"Exclusive Premium Dry Stick",
      imageSrc: 'https://www.poojapaath.com/assets/product_images/180/2.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://m.media-amazon.com/images/I/51k-3-3qATL.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      special:"Exclusive Premium Dry Stick"
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      special:"Denim Dhoop",
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwa8CVu8U4c84DmUQ936tsD7pfT4Tfi-x1A&usqp=CAU',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Earthen Bottle',
      href: '#',
      special:"Denim Dhoop",
      price: '$48',
      imageSrc: 'https://www.pujagoodies.com/wp-content/uploads/2023/09/444-jpg.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      special:"Exclusive Premium Dry Stick",
      imageSrc: 'https://www.poojapaath.com/assets/product_images/180/2.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://m.media-amazon.com/images/I/51k-3-3qATL.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      special:"Exclusive Premium Dry Stick"
    },
    {
      id: 8,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      special:"Denim Dhoop",
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwa8CVu8U4c84DmUQ936tsD7pfT4Tfi-x1A&usqp=CAU',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  const {removeFromCart,increaseQuantity,decreaseQuantity}= useState(1)
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrease = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecrease = (productId) => {
    decreaseQuantity(productId);
  };
  return (
    <div>
      <Navbar/>

<div>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex items-center justify-between border-b py-2">
              <div className="flex items-center space-x-4">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:underline focus:outline-none"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  )
}

export default AddCart