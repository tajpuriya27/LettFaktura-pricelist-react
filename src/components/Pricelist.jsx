import {
  BsFillPlusCircleFill,
  BsPrinterFill,
  BsToggle2On,
} from "react-icons/bs";

import content from "../../price.json";

const Pricelist = () => {
  return (
    <div className="main">
      <div id="price-title">
        <div className="price-title-left">
          <section>
            <input type="text" placeholder="Search Article No." />
          </section>
          <section>
            <input type="text" placeholder="Search Product" />
          </section>
        </div>
        <div className="price-title-right">
          <span className="btn-design">
            <p>New product</p>
            <BsFillPlusCircleFill className="icon-true" />
          </span>

          <span className="btn-design">
            <p>Print List</p>
            <BsPrinterFill className="icon" />
          </span>
          <span className="btn-design">
            <p>Advance Mode</p>
            <BsToggle2On className="icon " />
          </span>
        </div>
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
