import { XIcon } from '@heroicons/react/solid'

export default function OpenCart({ children, showSidebar, setShowSidebar, cartItems }: any) {
  return (
    <>
      {showSidebar ? (
          <div className="top-0 right-0 w-[35vw] bg-gray-300  pt-0 p-10 pl-10 text-white fixed h-full ">
            <a className="p-5" onClick={ () => setShowSidebar(false)}>
            <XIcon className='w-10 h-10' />
            </a>
            {cartItems.map((item : any) => <h2>{item.title}</h2>)}
          </div>
      ) : (
        children
      )}
    </>
  );
}
