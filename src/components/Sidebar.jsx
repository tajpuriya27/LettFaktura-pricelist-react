import {
  BsFileEarmarkText,
  BsPersonFill,
  BsGearFill,
  BsJournals,
  BsTagFill,
  BsFillXCircleFill,
  BsFileRuledFill,
  BsFillPersonVcardFill,
  BsFillCloudDownloadFill,
  BsPercent,
  BsEscape,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <p>Menu</p>
      <hr />
      <ul>
        <li>
          <BsFileEarmarkText className="icon-1" />
          Invoices
        </li>
        <li>
          <BsPersonFill className="icon-true" />
          Customers
        </li>
        <li>
          <BsGearFill className="icon-1" />
          My Business
        </li>
        <li>
          <BsJournals className="icon-1" />
          Invoice Journal
        </li>
        <li>
          <BsTagFill className="icon-2" />
          Price List
        </li>
        <li>
          <BsFileEarmarkText className="icon-1" />
          Multiple Invoice
        </li>
        <li>
          <BsFillXCircleFill className="icon-3" />
          Unpaid Invoices
        </li>
        <li>
          <BsPercent className="icon-1" />
          Offer
        </li>
        <li>
          <BsFileRuledFill className="icon-1" />
          Inventory Control
        </li>
        <li>
          <BsFillPersonVcardFill className="icon-5" />
          Member Invoicing
        </li>
        <li>
          <BsFillCloudDownloadFill className="icon-1" />
          Import/Export
        </li>
        <li>
          <BsEscape className="icon-4" />
          Log out
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
