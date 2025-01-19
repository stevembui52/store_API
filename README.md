# Store API

This is a simple Store API built using Express.js. It provides endpoints to manage products in a store.

## Features

- Create, read, update, and delete products
- Search for products by name or category
- Pagination for product listings

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/store-api.git
    ```
2. Navigate to the project directory:
    ```sh
    cd store-api
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The API will be available at `http://localhost:3000`.

## Endpoints

### Products

- `GET /products` - Get all products
- `GET /products/:id` - Get a single product by ID
- `POST /products` - Create a new product
- `PUT /products/:id` - Update a product by ID
- `DELETE /products/:id` - Delete a product by ID

## Example Requests

### Get all products
```sh
curl -X GET http://localhost:3000/products
```

### Create a new product
```sh
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name": "Product Name", "price": 100, "category": "Category"}'
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For any inquiries, please contact [your email].
