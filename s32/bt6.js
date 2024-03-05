const products = [
    { id: 1, product_name: "iphone14promax", price: 25000000 },
    { id: 2, product_name: "iphone13promax", price: 20000000 },
    { id: 3, product_name: "ihone12promax", price: 15000000 },
];

const sortProductsByPriceAscending = (products) => {
    return products.sort((a, b) => a.price - b.price);
};

const sortedProducts = sortProductsByPriceAscending(products);
console.log('Danh sách sản phẩm sau khi sắp xếp theo giá tăng dần: ');
console.log(sortedProducts);