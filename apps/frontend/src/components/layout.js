import styles from './layout.module.css';
import Link from 'next/link';


export default function Layout({children, headerName, showButton}) {
  return (
    <div className="m-5">
      <div className="bg-neutral-400 text-white flex font-bold mb-5">
        <h1 className="flex w-full p-2">{headerName}</h1>
        {showButton? <Link className="pr-2.5 pt-1.5 hover:underline" href="/addTodo"> Add </Link> :
         <Link className="pr-2.5 pt-1.5 hover:underline" href="/list"> Back </Link>}
      </div>
      {children}
    </div>
  );
}