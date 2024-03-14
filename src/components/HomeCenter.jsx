import React from 'react'

const HomeCenter = () => {
    const products = [
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
  return (
    <div className='h-fit flex items-center bg-[#F8F9FA] justify-start pt-16 flex-col'>
        <div className="div ">
            <h1 className='text-5xl text-[#001B38] font-[700]'>ALL TIME BESTSELLER</h1>
        </div>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 bg-[#F8F9FA] lg:max-w-7xl lg:px-2">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1  gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-24">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group py-4 rounded-lg w-[80vw] lg:w-[20vw] bg-[#fff] px-6">
              <div className="aspect-h-1  h-72 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full transition-all ease-in-out object-cover object-center group-hover:scale-125"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <h3 className="mt-2 text-sm text-gray-700">In Stock</h3>
              <h3 className="mb-4 text-sm  text-gray-700">{product.special}</h3>
              <button className='w-full font-[600] text-[#001b38c3] py-2 rounded shadow-sm hover:text-white  border-2 border-[#001b3861]  hover:bg-[#001b38bd] shadow-zinc-600 bg-zinc-100'>Add To Cart</button>
            </a>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomeCenter