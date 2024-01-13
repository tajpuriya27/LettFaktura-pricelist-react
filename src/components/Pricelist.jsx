import content from "../../price.json";
console.log(content);

const Pricelist = () => {
  return (
    <div className="main">
      <div id="price-title">
        <h1>Price List</h1>
        <button className="btn">Add New</button>
      </div>
      <div id="price-content">
        <table>
          <thead>
            <tr>
              <th>Article No.</th>
              <th>Product/Service</th>
              <th>In Price</th>
              <th>Price</th>
              <th>Unit</th>
              <th>In Stock</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {content.map((product) => (
              <tr key={product.article_no}>
                <td className="tb-center">{product.article_no}</td>

                <td>{product.service}</td>
                <td>{product.in_price}</td>
                <td>{product.out_price}</td>
                <td>{product.unit}</td>
                <td>{product.in_stock}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricelist;
