
const Footer = () => {
  return (
    <div className="footer min-w-0">
      <div className="texts text-gray-500 text-xs    rounded-3xl  m-3  p-6 flex flex-col ">
        <div className="row1 flex gap-x-2">
          <p className="cursor-pointer hover:underline"> Terms .</p>
          <p className="cursor-pointer hover:underline"> Privacy .</p>
          <p className="cursor-pointer hover:underline">Cookies .</p>
          <p className="cursor-pointer hover:underline"> Accessibility .</p>
        </div>
        <div className="row2 flex gap-x-2">
          <p className="cursor-pointer hover:underline"> Ads Info .</p>
          <p className="cursor-pointer hover:underline"> More...</p>
          <p className="cursor-pointer hover:underline"> Accessibility .</p>
          <p className="cursor-pointer"> &copy; 2026 XCorp.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
