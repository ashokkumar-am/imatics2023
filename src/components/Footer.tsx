
const Footer = () => {
  return (<>
   <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <img src="/I-matics-logo.jpeg" alt="iMatics" className="h-12" />
            <p className="mt-4">Your company description here.</p>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <h2 className="text-lg font-bold">Column 1</h2>
            <ul className="mt-4">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <h2 className="text-lg font-bold">Column 2</h2>
            <ul className="mt-4">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <h2 className="text-lg font-bold">Column 3</h2>
            <ul className="mt-4">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>)
};

export default Footer;
